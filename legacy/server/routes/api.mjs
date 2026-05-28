import { handleStripe } from "./stripe.mjs";
import { handlePayPal } from "./paypal.mjs";

function sendJson(res, status, obj) {
  const body = Buffer.from(JSON.stringify(obj));
  res.writeHead(status, {
    "content-type": "application/json; charset=utf-8",
    "content-length": String(body.length),
  });
  res.end(body);
}

export async function handleApi(req, res) {
  if (!req.url) return sendJson(res, 400, { error: "bad_request" });

  if (req.url.startsWith("/api/stripe/")) return handleStripe(req, res);
  if (req.url.startsWith("/api/paypal/")) return handlePayPal(req, res);

  if (req.url === "/api/health") return sendJson(res, 200, { ok: true });

  return sendJson(res, 404, { error: "not_found" });
}

