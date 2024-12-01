import { reactRouter } from "@react-router/dev/vite";
import { cloudflareDevProxy } from "@react-router/dev/vite/cloudflare";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ mode }) => {
  return {
    build: {
      target: "esnext",
      sourcemap: mode === "development",
    },
    ssr: {
      target: "webworker",
      noExternal: ["isbot"],
    },
    optimizeDeps: {
      include: ["react", "react-dom", "react-router"],
    },
    plugins: [cloudflareDevProxy(), reactRouter(), tsconfigPaths()],
  };
});
