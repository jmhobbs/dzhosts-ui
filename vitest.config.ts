import { resolve } from "node:path";

import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: {
      "@dzhosts/tokens": resolve(__dirname, "packages/tokens/src/index.ts"),
    },
  },
  test: {
    environment: "jsdom",
    include: ["packages/components/src/**/*.test.ts"],
  },
});
