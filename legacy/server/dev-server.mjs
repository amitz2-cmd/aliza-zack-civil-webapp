import http from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";
import { handleApi } from "./routes/api.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = join(__filename, "..");
const projectRoot = normalize(join(__dirname, ".."));
const publicRoot = normalize(join(projectRoot, "public"));

const PORT = Number(process.env.PORT || 3000);

const MIME_BY_EXT = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
};

function send(res, status, headers, body) {
  res.writeHead(status, headers);
  res.end(body);
}

function safeJoin(root, requestPath) {
  const cleaned = requestPath.split("?")[0] ?? "/";
  const rel = cleaned.startsWith("/") ? cleaned.slice(1) : cleaned;
  const resolved = normalize(join(root, rel));
  if (!resolved.startsWith(root)) return null;
  return resolved;
}

const server = http.createServer(async (req, res) => {
  try {
    if (!req.url) return send(res, 400, { "content-type": "text/plain" }, "Bad Request");

    if (req.url.startsWith("/api/")) {
      return await handleApi(req, res);
    }

    const target = safeJoin(publicRoot, req.url === "/" ? "/index.html" : req.url);
    if (!target) return send(res, 400, { "content-type": "text/plain" }, "Bad Request");

    const s = await stat(target).catch(() => null);
    if (!s) return send(res, 404, { "content-type": "text/plain" }, "Not Found");

    if (s.isDirectory()) {
      const indexPath = join(target, "index.html");
      const is = await stat(indexPath).catch(() => null);
      if (!is) return send(res, 404, { "content-type": "text/plain" }, "Not Found");
      const body = await readFile(indexPath);
      return send(res, 200, { "content-type": MIME_BY_EXT[".html"] }, body);
    }

    const ext = extname(target).toLowerCase();
    const mime = MIME_BY_EXT[ext] || "application/octet-stream";
    const body = await readFile(target);
    return send(res, 200, { "content-type": mime }, body);
  } catch (err) {
    console.error(err);
    return send(res, 500, { "content-type": "text/plain" }, "Internal Server Error");
  }
});

server.listen(PORT, () => {
  console.log(`[dev-server] http://localhost:${PORT}`);
});

