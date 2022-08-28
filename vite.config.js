import react from '@vitejs/plugin-react';
import { defineConfig } from "vite";
/**
 * https://vitejs.dev/config/
 * @type { import('vite').UserConfig }
 */
export default defineConfig({
  define: {
    global: {},
    process: {
      'env': {}
    } 
  },
  plugins: [react()],
  server: {
    host: '0.0.0.0',
  }
})