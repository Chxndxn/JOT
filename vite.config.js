import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Map the long import path to the actual path
      "@src/": new URL("src/constants/", import.meta.url).pathname,
    },
  },
});
