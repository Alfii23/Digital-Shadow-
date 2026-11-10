import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        analyzer: resolve(__dirname, 'analyzer.html'),
        login: resolve(__dirname, 'login.html'),
      },
    },
  },
});
