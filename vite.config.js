import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        short_name: "CivicOne",
        name: "CivicOne Reporting App",
        description: "Report civic issues quickly and easily.",
        icons: [
          {
            src: "/icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ],
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#1e3a8a",
        display: "standalone",
        orientation: "portrait-primary"
      }
    })
  ]
});
