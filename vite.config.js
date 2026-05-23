import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

const simpleApiMock = () => ({
  name: "simple-api-mock",
  configureServer(server) {
    server.middlewares.use(async (req, res, next) => {
      if (req.url !== "/api/contact" || req.method !== "POST") return next();

      // Read JSON body
      let body = "";
      req.on("data", chunk => { body += chunk; });
      req.on("end", async () => {
        try {
          req.body = JSON.parse(body);
        } catch {
          req.body = {};
        }

        res.status = (code) => { res.statusCode = code; return res; };
        res.json = (data) => {
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify(data));
        };

        try {
          // Dynamic import
          const { default: handler } = await import("./api/contact.js?ts=" + Date.now());
          await handler(req, res);
        } catch (err) {
          console.error(err);
          res.status(500).json({ error: "Internal error" });
        }
      });
    });
  },
});

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  process.env = { ...process.env, ...env };

  return {
    plugins: [react(), simpleApiMock()],
  };
});
