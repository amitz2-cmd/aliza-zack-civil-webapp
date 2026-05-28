function sendJson(res, status, obj) {
  const body = Buffer.from(JSON.stringify(obj));
  res.writeHead(status, {
    "content-type": "application/json; charset=utf-8",
    "content-length": String(body.length),
  });
  res.end(body);
}

export async function handleStripe(req, res) {
  // Implemented in the Payments milestone (Stripe Checkout + webhooks).
  return sendJson(res, 501, {
    error: "not_implemented",
    message: "Stripe endpoints will be enabled in the payments milestone.",
  });
}

