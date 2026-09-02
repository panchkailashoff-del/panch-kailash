import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// IMPORTANT: base must match your GitHub repository name exactly,
// since GitHub Pages serves project sites from /<repo-name>/.
// Repo: panchkailashoff-del/panch-kailash -> base: "/panch-kailash/"
export default defineConfig({
  base: "/panch-kailash/",
  plugins: [react()],
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
  },
});
