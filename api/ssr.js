let cachedServer;

async function getServer() {
  if (!cachedServer) {
    const mod = await import("../dist/server/server.js");
    cachedServer = mod.default;
  }
  return cachedServer;
}

export default async function handler(req, res) {
  const server = await getServer();

  const protocol = req.headers["x-forwarded-proto"] ?? "https";
  const host = req.headers.host ?? "localhost";
  const url = `${protocol}://${host}${req.url}`;

  // Collect body for non-GET requests
  let body = undefined;
  if (!["GET", "HEAD"].includes(req.method)) {
    const chunks = [];
    for await (const chunk of req) {
      chunks.push(chunk);
    }
    if (chunks.length > 0) body = Buffer.concat(chunks);
  }

  // Build headers object
  const headers = {};
  for (const [key, value] of Object.entries(req.headers)) {
    if (value !== undefined) {
      headers[key] = Array.isArray(value) ? value.join(", ") : value;
    }
  }

  const webRequest = new Request(url, { method: req.method, headers, body });
  const webResponse = await server.fetch(webRequest);

  res.statusCode = webResponse.status;
  for (const [key, value] of webResponse.headers.entries()) {
    res.setHeader(key, value);
  }

  res.end(Buffer.from(await webResponse.arrayBuffer()));
}
