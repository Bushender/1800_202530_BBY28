import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        login: resolve(__dirname, "login.html"),
        main: resolve(__dirname, "main.html"),
        profile: resolve(__dirname, "profile.html"),
        assignments: resolve(__dirname, "assignments.html"),
        floorPlaceholder: resolve(__dirname, "floorPlaceholder.html"),
        NE: resolve(__dirname, "NE.html"),
        NW: resolve(__dirname, "NW.html"),
        SE: resolve(__dirname, "SE.html"),
        SW: resolve(__dirname, "SW.html"),
        schedule: resolve(__dirname, "schedule.html"),
        settings: resolve(__dirname, "settings.html"),
        skeleton: resolve(__dirname, "skeleton.html"),
      },
    },
  },
});
