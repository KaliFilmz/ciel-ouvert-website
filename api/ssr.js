import server from "../dist/server/server.js";

export const config = { runtime: "edge" };

export default (request) => server.fetch(request);
