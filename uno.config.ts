import { defineConfig, presetUno, presetIcons, presetTypography } from "unocss";

import transformerDirectives from "@unocss/transformer-directives";

export default defineConfig({
  transformers: [transformerDirectives()],
  presets: [
    presetUno({
      dark: "media",
    }),
    presetIcons(),
    presetTypography(),
  ],
  theme: {
    colors: {
      cream: "#eff0eb",
    },
  },
});
