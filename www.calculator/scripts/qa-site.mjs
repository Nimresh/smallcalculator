import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, extname, join, normalize, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const args = new Set(process.argv.slice(2));
const runAll = args.has("--all") || args.size === 0;
const checks = {
  build: runAll || args.has("--build"),
  lint: runAll || args.has("--lint") || args.has("--build"),
  typecheck: runAll || args.has("--typecheck") || args.has("--build"),
  test: runAll || args.has("--test") || args.has("--build")
};

const failures = [];
const warnings = [];
const seen = {
  pages: 0,
  forms: 0,
  links: 0,
  assets: 0,
  scripts: 0
};

function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) return walk(full);
    return full;
  });
}

function fail(message) {
  failures.push(message);
}

function warn(message) {
  warnings.push(message);
}

function read(file) {
  return readFileSync(file, "utf8");
}

function rel(file) {
  return relative(root, file).replace(/\\/g, "/");
}

function isExternal(url) {
  return /^(?:https?:|mailto:|tel:|javascript:|data:)/i.test(url);
}

function localTarget(fromFile, rawUrl) {
  const url = rawUrl.trim();
  if (!url || url === "#" || isExternal(url)) return null;
  const clean = url.split("#")[0].split("?")[0];
  if (!clean) return null;
  const base = clean.startsWith("/") ? root : dirname(fromFile);
  return normalize(join(base, clean));
}

function checkMetadata(htmlFile, html) {
  const name = rel(htmlFile);
  const title = html.match(/<title>([\s\S]*?)<\/title>/i)?.[1]?.trim() || "";
  const description =
    html.match(/<meta\s+name=["']description["'][^>]*content=(["'])(.*?)\1/i)?.[2]?.trim() ||
    html.match(/<meta\s+content=(["'])(.*?)\1[^>]*name=["']description["']/i)?.[2]?.trim() ||
    "";
  const canonical = html.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']*)/i)?.[1]?.trim() || "";
  if (!title) fail(`${name}: missing <title>`);
  if (title.length > 70) warn(`${name}: title is longer than 70 characters`);
  if (description.length < 45) warn(`${name}: meta description is short`);
  if (!canonical) fail(`${name}: missing canonical URL`);
  if (!/<meta\s+name=["']viewport["']/i.test(html)) fail(`${name}: missing viewport metadata`);
  if (!/property=["']og:title["']/i.test(html)) fail(`${name}: missing Open Graph title`);
  if (!/name=["']twitter:description["']/i.test(html)) fail(`${name}: missing Twitter description`);
  if (!/application\/ld\+json/i.test(html)) fail(`${name}: missing structured data`);
  if (!/<h1\b/i.test(html)) warn(`${name}: missing visible h1`);
}

function checkRefs(htmlFile, html) {
  for (const match of html.matchAll(/\b(?:href|src|action)=["']([^"']+)["']/gi)) {
    const target = localTarget(htmlFile, match[1]);
    if (!target) continue;
    const ext = extname(target).toLowerCase();
    if (ext === ".html" || ext === "" || match[0].startsWith("href")) seen.links += 1;
    else seen.assets += 1;
    if (!target.startsWith(root)) {
      fail(`${rel(htmlFile)}: local reference escapes site root: ${match[1]}`);
    } else if (!existsSync(target)) {
      fail(`${rel(htmlFile)}: broken local reference: ${match[1]}`);
    }
  }
}

function checkForms(htmlFile, html) {
  const name = rel(htmlFile);
  const forms = html.match(/<form\b[\s\S]*?<\/form>/gi) || [];
  const calculatorPage = /calculator|converter|generator|counter|roller|encode|decode/i.test(name);
  forms.forEach((form) => {
    if (/calcSearchForm/.test(form)) return;
    if (!/(type\s*=\s*["']?(?:submit|image)|<button\b)/i.test(form)) return;
    seen.forms += 1;
    if (calculatorPage && !/js\/common\.js/i.test(html)) {
      fail(`${name}: calculator form does not load js/common.js`);
    }
  });
}

function checkSitemap() {
  const sitemap = join(root, "sitemap.xml");
  if (!existsSync(sitemap)) {
    fail("sitemap.xml is missing");
    return;
  }
  const xml = read(sitemap);
  for (const match of xml.matchAll(/<loc>https:\/\/smallcalculator\.net\/([^<]*)<\/loc>/g)) {
    const local = match[1] || "index.html";
    const target = local.endsWith("/") || local === "" ? "index.html" : local;
    if (!existsSync(join(root, target))) fail(`sitemap.xml references missing page: ${target}`);
  }
}

function checkHeaders() {
  for (const file of [".htaccess", "_headers", "vercel.json", "robots.txt", "manifest.json", "sw.js"]) {
    if (!existsSync(join(root, file))) fail(`${file} is missing`);
  }
  const headers = existsSync(join(root, "_headers")) ? read(join(root, "_headers")) : "";
  if (!/Strict-Transport-Security/i.test(headers)) fail("_headers: missing HSTS");
  if (!/Content-Security-Policy/i.test(headers)) fail("_headers: missing CSP");
  if (!/Cache-Control/i.test(headers)) fail("_headers: missing cache rules");
}

function checkJsSyntax() {
  for (const file of walk(root).filter((item) => item.endsWith(".js"))) {
    seen.scripts += 1;
    const result = spawnSync(process.execPath, ["--check", file], { encoding: "utf8" });
    if (result.status !== 0) fail(`${rel(file)}: JavaScript syntax error\n${result.stderr || result.stdout}`);
  }
}

function checkRuntimeCoverage() {
  const common = read(join(root, "js", "common.js"));
  const required = [
    "staticCalculatorResult",
    "calculateAreaForm",
    "calculateCircleForm",
    "calculateLoanLikeForm",
    "calculateHealthForm",
    "genericCalculatorResult",
    "enhanceResultActionButtons"
  ];
  required.forEach((token) => {
    if (!common.includes(token)) fail(`js/common.js: missing runtime token ${token}`);
  });
  if (/being upgraded for instant results|temporarily preventing old static submissions/i.test(common)) {
    fail("js/common.js still contains the old calculator blocker copy");
  }
}

function checkAssetSizes() {
  for (const file of walk(root)) {
    const ext = extname(file).toLowerCase();
    if (![".png", ".jpg", ".jpeg", ".gif", ".pdf", ".zip", ".js", ".css"].includes(ext)) continue;
    const size = statSync(file).size;
    if (size > 1024 * 1024 && !/downloads|pdf/i.test(rel(file))) {
      warn(`${rel(file)} is larger than 1 MB`);
    }
  }
}

if (checks.lint) {
  const htmlFiles = walk(root).filter((file) => file.endsWith(".html"));
  seen.pages = htmlFiles.length;
  htmlFiles.forEach((file) => {
    const html = read(file);
    const htmlWithoutScripts = html.replace(/<script\b[\s\S]*?<\/script>/gi, "");
    checkMetadata(file, html);
    checkRefs(file, htmlWithoutScripts);
    checkForms(file, html);
  });
  checkSitemap();
  checkHeaders();
  checkAssetSizes();
}

if (checks.typecheck) checkJsSyntax();
if (checks.test) checkRuntimeCoverage();

console.log(`SmallCalculator QA: ${seen.pages} pages, ${seen.forms} production forms, ${seen.links} local links, ${seen.assets} assets, ${seen.scripts} scripts checked.`);
if (warnings.length) {
  console.log(`Warnings (${warnings.length}):`);
  warnings.slice(0, 40).forEach((message) => console.log(`- ${message}`));
  if (warnings.length > 40) console.log(`- ...${warnings.length - 40} more warnings`);
}
if (failures.length) {
  console.error(`Failures (${failures.length}):`);
  failures.slice(0, 80).forEach((message) => console.error(`- ${message}`));
  if (failures.length > 80) console.error(`- ...${failures.length - 80} more failures`);
  process.exit(1);
}
console.log("All requested QA checks passed.");
