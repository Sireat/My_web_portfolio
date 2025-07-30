import "@unocss/reset/tailwind-compat.css";
import "virtual:uno.css";
import "./custom.css";
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import '@fortawesome/fontawesome-free/css/all.min.css';

import App from "./App.vue";
import { ViteSSG } from "vite-ssg";
import { ref } from "vue";
import { routes } from "./router";

export const data = ref({ starts: 0 });
export const createApp = ViteSSG(App, { routes }, async ({ app, router, routes, isClient, initialState }) => {});
