// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4
  },

  modules: ['@nuxtjs/i18n', '@nuxt/ui', '@nuxt/content'],

  i18n: {
    strategy: "no_prefix",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n",
    },
    lazy: true,
    compilation: {
      strictMessage: false,
    },
    locales: [
      {
        code: "en",
        name: "English",
        file: "en.json",
      },
    ],
  },
})