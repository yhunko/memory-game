import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import WindiCSS from "vite-plugin-windicss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), WindiCSS()],
  resolve: {
    alias: {
      src: resolve(__dirname, "./src"),
    },
  },
});
