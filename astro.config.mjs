import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
  integrations: [tailwind(), react()],
  output: "static",
  site: "https://your-portfolio.com",
});
