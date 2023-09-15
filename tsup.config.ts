import { defineConfig } from "tsup"

export default defineConfig({
  bundle: false,
  format: ["esm"],
  dts: true,
  splitting: true,
  entry: {
    index: "src/index.ts",
  },
})
