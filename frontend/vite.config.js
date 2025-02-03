import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server:{
    proxy:{
      // In this when there is use of /api the http url will appen din front of the api so that i can access /api/jokes
      // and also the server thinks that the request url is exact same as you can see so its his home 
      '/api':'http://localhost:3000',
    },
  },
  plugins: [react()],
})
