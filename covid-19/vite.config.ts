import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Unocss from 'unocss/vite'
import presetAttributify from '@unocss/preset-attributify'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), Unocss({
    presets: [
      presetAttributify({ /* options */ }),
      // ...other presets
    ],
  }),],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
