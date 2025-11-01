import mdx from '@mdx-js/rollup'
import react from "@vitejs/plugin-react"
import path from "path"
import { defineConfig } from "vite"

export default defineConfig({
    plugins: [
        // Ensure mdx runs in the pre phase before react
        { enforce: "pre", ...mdx() },
        react({ include: /\.(jsx|js|mdx|md|tsx|ts)$/ }), // Include .mdx for React plugin
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
})
