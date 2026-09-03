import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages configuration
// Repository:
// https://github.com/panchkailashoff-del/panch-kailash
//
// GitHub Pages project URL uses:
// /panch-kailash/

export default defineConfig({
  base: "/panch-kailash/",

  plugins: [react()],

  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
  },
});
