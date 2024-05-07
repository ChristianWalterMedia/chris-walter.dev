// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  site: {
    // production URL
    url: 'https://localhost:3000',
  },

  extends: ['@nuxt/ui-pro'],
  
  modules: [
    '@nuxt/test-utils/module',
    "@nuxt/eslint",
    "@nuxt/content",
    "@nuxt/ui",
    "@nuxt/image",
    '@vueuse/nuxt',
    'nuxt-og-image',
  ],

  devtools: { enabled: true },

  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
  },

  eslint: {
    config: {
      standalone: false,
    },
  },

  hooks: {
    // Define `@nuxt/ui` components as global to use them in `.md` (feel free to add those you need)
    'components:extend': (components) => {
      const globals = components.filter(c => ['UButton'].includes(c.pascalName))

      globals.forEach(c => c.global = true)
    }
  },

  ui: {
    icons: ['heroicons', 'simple-icons']
  },
})
