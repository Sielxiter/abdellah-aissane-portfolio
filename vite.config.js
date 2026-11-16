import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    rolldownOptions: {input: {main: "index.html", mentions: "mentions.html"}}
  }
});
