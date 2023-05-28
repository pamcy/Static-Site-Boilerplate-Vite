// Multiple entry points/output in library mode
// https://github.com/vitejs/vite/discussions/1736#discussioncomment-413068

import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    base: '',
    root: 'src',
    publicDir: '../public',
    build: {
        outDir: '../dist',
        rollupOptions: {
            input: {
                main: resolve(__dirname, './src/index.html'),
                second: resolve(__dirname, './src/second.html'),
                third: resolve(__dirname, './src/third.html'),
            },
        },
    },
})

