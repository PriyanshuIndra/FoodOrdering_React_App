import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://github.com/PriyanshuIndra/FoodOrdering_React_App/tree/main/src",
  plugins: [react()],
})
