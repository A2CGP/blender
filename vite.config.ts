import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/blender',
  build: {
    outDir: resolve(__dirname, 'docs'),
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@configs': resolve(__dirname, 'src/configs'),
      '@creator': resolve(__dirname, 'src/creator'),
    },
  },
});
