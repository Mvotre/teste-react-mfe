import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// @ts-ignore
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host-app",
      remotes: {
        header_mfe: "http://localhost:3002/assets/remoteEntry.js",
        footer_mfe: "http://localhost:3003/assets/remoteEntry.js",
        cards_mfe: "http://localhost:3001/assets/remoteEntry.js",
      },
      shared: ["react"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
})
