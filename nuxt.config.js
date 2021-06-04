export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Joldau - Guide application for Petroleum Engineering of Satbayev University',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Joldau - Guide application for Petroleum Engineering of Satbayev University' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/images/favicon.png' }      
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: '~/assets/scss/main.scss', lang: 'scss' }
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  serverMiddleware: [
    { path: '/api/category', handler: '~/api/category.ts' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://github.com/vanhoofmaarten/nuxt-mq#readme
    'nuxt-mq',
    // https://i18n.nuxtjs.org/
    'nuxt-i18n'
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    icon: {
      source: "/images/favicon.png"
    },
    manifest: {
      lang: "en",
      background_color: "#fafafa",
	    theme_color: "#005dac",
      name: "Joldau",
      short_name: "Joldau",
      display: "standalone",
      start_url: "/",
      icons: [
        {
          src: "/images/favicon.png",
          type: "image/png",
          sizes: "16x16"
        },
        {
          src: "/images/favicon60.png",
          type: "image/png",
          sizes: "60x60"
        },
        {
          src: "/images/favicon76.png",
          type: "image/png",
          sizes: "76x76"
        },
        {
          src: "/images/favicon120.png",
          type: "image/png",
          sizes: "120x120"
        },
        {
          src: "/images/favicon152.png",
          type: "image/png",
          sizes: "152x152"
        }
      ]
    }
  },

  // Media query breakpoints: https://github.com/AlexandreBonaventure/vue-mq
  mq: {
    defaultBreakpoint: 'sm',
    breakpoints: {
      sm: 450,
      md: 1250,
      lg: Infinity,
    }
  },

  // Internalization: https://i18n.nuxtjs.org/
  i18n: {    
    locales: [{
      code: 'kz',
      iso: 'kk-KZ',
      name: 'Қазақша',
      file: 'kk-KZ.js'
    }, {
      code: 'ru',
      iso: 'ru-RU',
      name: 'Русский',
      file: 'ru-RU.js'
    }, {
      code: 'en',
      iso: 'en-US',
      name: 'English',
      file: 'en-US.js'
    }],
    defaultLocale: 'kz',
    lazy: true,
    langDir: '~/locales/'    
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
