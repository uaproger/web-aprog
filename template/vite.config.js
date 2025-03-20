import { defineConfig } from "vite";
import path from "path";
import { version, name } from './project.json';

export default defineConfig({
    root: ".",
    base: "/",
    server: {
        watch: {
            usePolling: true,
            ignored: ["node_modules", "public/build"]
        },
        // host: "web-aprog.loc",
        // port: 2025,
        strictPort: true
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src")
        }
    },
    publicDir: "static",
    build: {
        outDir: "public/build",
        emptyOutDir: true,
        manifest: true,
        rollupOptions: {
            input: ["src/js/aprog.js", "src/css/index.css"]
        }
    },
    define: {
        global: {},
        browser: {},
        __APP_VERSION__: JSON.stringify(version),
        __APP_NAME__: JSON.stringify(name),
    }
});