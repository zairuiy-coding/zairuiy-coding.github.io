import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/zairuiy-personal-portfolio/',  // repo name
  build: {
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  }
});
