import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base : "/todo-list-redux-async-thunks/",
  plugins: [react()],
})
