import { resolve } from 'path'
import { defineConfig } from 'vite'
import fs from 'fs'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                // Include the root-level index.html
                main: resolve(__dirname, 'index.html'),
                // Automatically include all .html files in ./pages directory
                ...Object.fromEntries(
                    fs.readdirSync(resolve(__dirname, 'pages'))
                        .filter(file => file.endsWith('.html')) // Filter for .html files
                        .map(file => [file.replace('.html', ''), resolve(__dirname, 'pages', file)])
                ),
            },
        },
    },
})