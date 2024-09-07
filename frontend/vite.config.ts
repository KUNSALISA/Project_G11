import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.tsx'], // รวมการตั้งค่านี้เข้าไป
  plugins: [react()],
});

