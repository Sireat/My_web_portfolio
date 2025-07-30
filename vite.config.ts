import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import SVGLoader from "vite-svg-loader";
import UnoCSS from "unocss/vite";
import WebfontDownload from "vite-plugin-webfont-dl";

export default defineConfig({
  css: {
    transformer: "lightningcss",
  },
  plugins: [UnoCSS(), Vue(), SVGLoader(), WebfontDownload()],
});
