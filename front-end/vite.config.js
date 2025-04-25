import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';


// export default defineConfig(({ mode }) => ({
//   plugins: [react()],
//   define: {
//     'process.env': {},
//     __APP_ENV__: JSON.stringify(mode)
//   }
// }));