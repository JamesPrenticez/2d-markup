import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import alias from "@rollup/plugin-alias";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    alias({
      entries: [
        { find: '@components', replacement: '/src/components' },
        { find: '@ui', replacement: '/src/ui' },
        { find: '@hooks', replacement: '/src/hooks' },
        { find: '@assets', replacement: '/src/assets' },
        { find: '@lib', replacement: '/src/lib' },
        { find: '@data', replacement: '/src/data' },
        { find: '@constants', replacement: '/src/constants' },
        { find: '@utils', replacement: '/src/utils' },
        { find: '@models', replacement: '/src/models' },
        { find: '@icons', replacement: '/src/icons' },
      ],
    }),
  ],
  server: {
    port: 3000,
  },
  
})
