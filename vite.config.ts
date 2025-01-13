import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
    base: "/score-system-showcase/",
    build: {
        outDir: "docs", // <--- set the build output to docs
    },
    plugins: [react()],
});
