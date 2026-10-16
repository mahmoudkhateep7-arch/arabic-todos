import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import injecthtml from "vite-plugin-html-inject";

const my_configuration = defineConfig({
  plugins: [tailwindcss(), injecthtml()],
});
export default my_configuration;
