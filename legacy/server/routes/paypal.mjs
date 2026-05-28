function sendJson(res, status, obj) {
  const body = Buffer.from(JSON.stringify(obj));
  res.writeHead(status, {
    "content-type": "application/json; charset=utf-8",
    "content-length": String(body.length),
  });
  res.end(body);
}

export async function handlePayPal(req, res) {
  // Implemented in the Payments milestone (PayPal order + status flow).
  return sendJson(res, 501, {
    error: "not_implemented",
    message: "PayPal endpoints will be enabled in the payments milestone.",
  });
}

