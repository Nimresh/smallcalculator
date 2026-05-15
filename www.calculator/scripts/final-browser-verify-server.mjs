import { createServer } from "node:http";
import { readFile, readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const statusFile = path.join(rootDir, ".verification-status.json");
const reportFile = path.join(rootDir, ".verification-report.json");

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".pdf": "application/pdf"
};

const entries = await readdir(rootDir);
const sitemap = await readFile(path.join(rootDir, "sitemap.xml"), "utf8");
const sitemapPages = [...sitemap.matchAll(/<loc>https:\/\/smallcalculator\.net\/([^<]+\.html)<\/loc>/g)].map((match) => match[1]);
const localPages = entries.filter((name) => name.endsWith(".html"));
const allPages = [...new Set([...sitemapPages, ...localPages])].sort();
const calculatorPages = allPages.filter((name) => /(calculator|converter|generator|counter|roller|encode-decode)\.html$/.test(name));
const missingRequests = new Set();

const verificationPage = `<!doctype html>
<meta charset="utf-8">
<title>SmallCalculator verification</title>
<style>
  body{font-family:Arial,sans-serif;margin:0}
  iframe{width:390px;height:900px;border:0;display:block}
</style>
<div id="status">Starting...</div>
<iframe id="frame"></iframe>
<script>
const sitePages = ${JSON.stringify(allPages)};
const requestedPages = new URLSearchParams(location.search).get("pages");
const allPages = requestedPages ? requestedPages.split(",").map((page) => page.trim()).filter(Boolean) : sitePages;
const calculatorPages = new Set(${JSON.stringify(calculatorPages)});
const report = {
  pages: allPages.length,
  calculatorPages: calculatorPages.size,
  forms: 0,
  blankOutputs: [],
  nanOutputs: [],
  runtimeErrors: [],
  loadFailures: [],
  mobileOverflow: [],
  refreshFailures: [],
  assetProblems: []
};
const frame = document.getElementById("frame");
const statusNode = document.getElementById("status");
let currentPage = "";

window.addEventListener("error", (event) => {
  const message = String(event.message || event.error || "Unknown error");
  if (!/ResizeObserver loop|Script error/i.test(message)) {
    report.runtimeErrors.push(currentPage + ": error: " + message);
  }
});
window.addEventListener("unhandledrejection", (event) => {
  const reason = String((event.reason && (event.reason.message || event.reason)) || "Unhandled rejection");
  report.runtimeErrors.push(currentPage + ": rejection: " + reason);
});

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const postJson = (url, body) => fetch(url, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(body)
}).catch(() => undefined);

async function unregisterServiceWorkers() {
  if (!("serviceWorker" in navigator)) return;
  try {
    const registrations = await navigator.serviceWorker.getRegistrations();
    await Promise.all(registrations.map((registration) => registration.unregister()));
  } catch (_) {}
}

function loadFrame(page, timeout = 15000) {
  currentPage = page;
  statusNode.textContent = "Loading " + page;
  return new Promise((resolve) => {
    let settled = false;
    const timer = setTimeout(() => {
      if (settled) return;
      settled = true;
      frame.onload = null;
      report.loadFailures.push(page);
      resolve(false);
    }, timeout);
    frame.onload = () => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      resolve(true);
    };
    frame.src = "/" + page;
  });
}

function reloadFrame(page, timeout = 15000) {
  currentPage = page;
  statusNode.textContent = "Refreshing " + page;
  return new Promise((resolve) => {
    let settled = false;
    const timer = setTimeout(() => {
      if (settled) return;
      settled = true;
      frame.onload = null;
      report.refreshFailures.push(page);
      resolve(false);
    }, timeout);
    frame.onload = () => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      resolve(true);
    };
    try {
      frame.contentWindow.location.reload();
    } catch (_) {
      report.refreshFailures.push(page);
      resolve(false);
    }
  });
}

function frameDoc() {
  return frame.contentDocument;
}

function bodyText(document) {
  return (document.body && document.body.innerText || "").replace(/\\s+/g, " ").trim();
}

function hasBadNumber(text) {
  return /(?:^|[^A-Za-z])(NaN|Infinity|-Infinity)(?:$|[^A-Za-z])/i.test(text);
}

function isSearchForm(form) {
  const name = (form.getAttribute("name") || form.id || "").toLowerCase();
  const action = (form.getAttribute("action") || "").toLowerCase();
  return name.includes("search") || action.includes("search");
}

function isProductionForm(form) {
  if (isSearchForm(form)) return false;
  if (form.closest("#right") && !form.closest("#content")) return false;
  return !!form.querySelector('input[type="submit"],button[type="submit"],button:not([type]),input[type="image"]');
}

function resultTextFor(form, document) {
  if (form.nextElementSibling && form.nextElementSibling.matches(".inline-calc-result,.static-calc-result,.calc-error")) {
    return form.nextElementSibling.innerText.replace(/\\s+/g, " ").trim();
  }
  const container = form.closest(".leftinput") || form.parentElement || document.body;
  let sibling = container.nextElementSibling;
  for (let index = 0; sibling && index < 5; index += 1, sibling = sibling.nextElementSibling) {
    if (sibling.matches && (
      sibling.matches(".rightresult,.static-calc-result,.inline-calc-result") ||
      sibling.querySelector(".h2result,.static-calc-result,.calc-error")
    )) {
      return sibling.innerText.replace(/\\s+/g, " ").trim();
    }
  }
  const result = document.querySelector(".static-calc-result,.inline-calc-result,.calc-error,.rightresult,.h2result,#coutput,#result,#output,#resultid,#resultid2,#resultout,#resultouta,#resultoutb");
  if (!result) return "";
  const text = result.innerText.replace(/\\s+/g, " ").trim();
  return text || (result.querySelector("img,svg,table") ? "[visual result]" : "");
}

function resultText(document) {
  return [...document.querySelectorAll(".static-calc-result,.inline-calc-result,.calc-error,.rightresult,.h2result,#coutput,#result,#output,#resultid,#resultid2,#resultout,#resultouta,#resultoutb")]
    .map((node) => node.innerText || "")
    .join(" ");
}

function checkAssets(page, document) {
  document.querySelectorAll("img").forEach((image) => {
    const src = image.getAttribute("src") || "";
    if (!src || src.startsWith("data:")) return;
    if (image.complete && image.naturalWidth === 0) {
      report.assetProblems.push(page + ": image failed " + src);
    }
  });
}

function hasScrollableAncestor(element) {
  let parent = element.parentElement;
  while (parent && parent !== document.body) {
    const overflowX = getComputedStyle(parent).overflowX;
    if (overflowX === "auto" || overflowX === "scroll") return true;
    parent = parent.parentElement;
  }
  return false;
}

function checkMobile(page, document) {
  const root = document.documentElement;
  const body = document.body;
  const scrollWidth = Math.max(root.scrollWidth || 0, body ? body.scrollWidth || 0 : 0);
  const offenders = [...document.body.querySelectorAll("*")].filter((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.width < 2 || rect.height < 2) return false;
    if (rect.right <= 392 && rect.left >= -2) return false;
    if (hasScrollableAncestor(element)) return false;
    return getComputedStyle(element).display !== "none";
  });
  if (scrollWidth > 394 || offenders.length) {
    const first = offenders[0];
    const label = first ? " offender=" + first.tagName.toLowerCase() +
      (first.id ? "#" + first.id : first.className ? "." + String(first.className).split(" ")[0] : "") +
      " parent=" + (first.parentElement ? first.parentElement.tagName.toLowerCase() + (first.parentElement.id ? "#" + first.parentElement.id : first.parentElement.className ? "." + String(first.parentElement.className).split(" ")[0] : "") : "") +
      " left=" + Math.round(first.getBoundingClientRect().left) +
      " right=" + Math.round(first.getBoundingClientRect().right) +
      " width=" + Math.round(first.getBoundingClientRect().width) : "";
    report.mobileOverflow.push(page + " scrollWidth=" + scrollWidth + label);
  }
}

async function submitForms(page, document) {
  const forms = [...document.forms].filter(isProductionForm);
  report.forms += forms.length;
  for (let index = 0; index < forms.length; index += 1) {
    let activeDocument = document;
    let form = forms[index];
    currentPage = page + " form " + (index + 1);
    const beforeBase = frame.contentWindow.location.href.split("#")[0];
    try {
      const submit = form.querySelector('input[type="submit"],button[type="submit"],button:not([type]),input[type="image"]');
      if (submit && typeof form.requestSubmit === "function") {
        form.requestSubmit(submit);
      } else {
        form.dispatchEvent(new SubmitEvent("submit", { bubbles: true, cancelable: true }));
      }
      await wait(240);
      if (frame.contentWindow.location.href.split("#")[0] !== beforeBase) {
        report.runtimeErrors.push(page + ": form " + (index + 1) + " navigated away on submit");
        await loadFrame(page);
        await wait(300);
        activeDocument = frameDoc();
        form = activeDocument.forms[index];
      } else {
        activeDocument = frameDoc();
      }
      const resultText = resultTextFor(form, activeDocument);
      if (hasBadNumber(resultText)) report.nanOutputs.push(page + ": form " + (index + 1));
      if (!resultText || /being upgraded|temporarily unavailable/i.test(resultText)) {
        report.blankOutputs.push(page + ": form " + (index + 1));
      }
    } catch (error) {
      report.runtimeErrors.push(page + ": form " + (index + 1) + " submit failed: " + (error && error.message ? error.message : error));
    }
  }
}

async function run() {
  await unregisterServiceWorkers();
  await postJson("/__progress", { pages: 0, total: allPages.length });
  for (let index = 0; index < allPages.length; index += 1) {
    const page = allPages[index];
    await postJson("/__progress", { pages: index, total: allPages.length });
    const loaded = await loadFrame(page);
    if (!loaded) continue;
    await wait(350);
    let document = frameDoc();
    if (!document || !document.body) {
      report.loadFailures.push(page + " missing document");
      continue;
    }
    checkAssets(page, document);
    checkMobile(page, document);
    if (hasBadNumber(resultText(document))) report.nanOutputs.push(page + ": initial render");
    if (calculatorPages.has(page)) await submitForms(page, document);
    await reloadFrame(page);
    await wait(100);
    document = frameDoc();
    if (document && document.body) {
      checkAssets(page, document);
      if (hasBadNumber(resultText(document))) report.nanOutputs.push(page + ": after refresh");
    }
    await postJson("/__progress", { pages: index + 1, total: allPages.length });
  }
  await postJson("/__report", report);
  statusNode.textContent = "Done";
}

run();
</script>`;

const server = createServer(async (request, response) => {
  const url = new URL(request.url, "http://127.0.0.1");
  if (url.pathname === "/__verification.html") {
    response.writeHead(200, { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" });
    response.end(verificationPage);
    return;
  }

  if ((url.pathname === "/__progress" || url.pathname === "/__report") && request.method === "POST") {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk;
    });
    request.on("end", async () => {
      const target = url.pathname === "/__report" ? reportFile : statusFile;
      let payload = body || "{}";
      if (url.pathname === "/__report") {
        try {
          const parsed = JSON.parse(payload);
          parsed.missingRequests = [...missingRequests].sort();
          payload = JSON.stringify(parsed, null, 2);
        } catch (_) {}
      }
      await writeFile(target, payload, "utf8");
      response.writeHead(204, { "Cache-Control": "no-store" });
      response.end();
      if (url.pathname === "/__report") {
        setTimeout(() => {
          server.close(() => {
            if (typeof process !== "undefined" && process.exit) process.exit(0);
          });
        }, 1000);
      }
    });
    return;
  }

  if (url.pathname === "/__status") {
    response.writeHead(200, { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" });
    response.end(JSON.stringify({ port, pages: allPages.length, calculatorPages: calculatorPages.length }));
    return;
  }

  let relativePath = decodeURIComponent(url.pathname.replace(/^\/+/, "")) || "index.html";
  relativePath = relativePath.replace(/\\/g, "/");
  if (relativePath.includes("..")) {
    response.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Forbidden");
    return;
  }

  const file = path.join(rootDir, relativePath);
  try {
    const fileStat = await stat(file);
    if (fileStat.isDirectory()) {
      response.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
      response.end("Directory");
      return;
    }
    const bytes = await readFile(file);
    response.writeHead(200, {
      "Content-Type": mimeTypes[path.extname(file).toLowerCase()] || "application/octet-stream",
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff"
    });
    response.end(bytes);
  } catch (_) {
    missingRequests.add(url.pathname);
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" });
    response.end("Not found");
  }
});

await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
const { port } = server.address();

await writeFile(statusFile, JSON.stringify({
  port,
  pages: 0,
  total: allPages.length,
  calculatorPages: calculatorPages.length,
  missingRequests: []
}, null, 2), "utf8");
await writeFile(reportFile, "", "utf8");

setInterval(async () => {
  try {
    const current = JSON.parse(await readFile(statusFile, "utf8"));
    current.missingRequests = [...missingRequests].sort();
    await writeFile(statusFile, JSON.stringify(current, null, 2), "utf8");
  } catch (_) {}
}, 2000).unref();

console.log(JSON.stringify({ port, pages: allPages.length, calculatorPages: calculatorPages.length }));

export { allPages, calculatorPages, port, server };
