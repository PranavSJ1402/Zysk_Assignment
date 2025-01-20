import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',  // Make sure the base is correct
  plugins: [react()],
  build: {
    outDir: 'dist', // Output directory for deployment
    assetsDir: 'assets', // Folder for assets
  },
});
