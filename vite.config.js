import { defineConfig } from 'vite';
import postcss from './postcss.config.js';
import react from '@vitejs/plugin-react';

export default defineConfig({
  define: {
    'process.env': process.env,
  },
  css: {
    postcss,
  },
  // '/dash-supplier2.0/'
  plugins: [react()],
  base: '/',
  resolve: {
    alias: [
      {
        find: /^~.+/,
        replacement: (val) => {
          return val.replace(/^~/, '');
        },
      },
    ],
  },

  build: {
    chunkSizeWarningLimit: 3000,
  },
});
