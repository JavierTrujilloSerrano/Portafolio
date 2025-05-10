import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  define: {
    'import.meta.env.VITE_API_URL': JSON.stringify(
      mode === 'development'
        ? 'http://localhost:4000'
        : 'https://https://portafolio-server-kxrp.onrender.com',  // Reemplaza con la URL de tu servidor
    ),
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.js',
  },
});
