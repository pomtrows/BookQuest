import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'Loup Solitaire',
        short_name: 'LoupSolitaire',
        description: 'Une aventure dont vous êtes le héros',
        theme_color: '#121212',
        background_color: '#121212',
        display: 'standalone',
        icons: [
          {
            src: 'images/avatars/avatar_1.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'images/avatars/avatar_1.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'images/avatars/avatar_1.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
})
