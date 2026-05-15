import { createServer } from "node:http";
import { existsSync, readFileSync } from "node:fs";
import { dirname, extname, join, normalize, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const port = Number(process.env.PORT || process.argv[2] || 4173);
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".pdf": "application/pdf",
  ".zip": "application/zip",
  ".xls": "application/vnd.ms-excel"
};

createServer((request, response) => {
  const url = new URL(request.url || "/", `http://127.0.0.1:${port}`);
  let pathname = decodeURIComponent(url.pathname);
  if (pathname === "/") pathname = "/index.html";
  const file = normalize(join(root, pathname));
  if (!file.startsWith(root)) {
    response.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Forbidden");
    return;
  }
  if (!existsSync(file)) {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
    return;
  }
  response.writeHead(200, {
    "Content-Type": types[extname(file).toLowerCase()] || "application/octet-stream",
    "Cache-Control": "no-store"
  });
  response.end(readFileSync(file));
}).listen(port, "127.0.0.1", () => {
  console.log(`SmallCalculator static server: http://127.0.0.1:${port}/`);
});
