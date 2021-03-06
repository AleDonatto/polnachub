import colors from 'vuetify/es5/util/colors'
import i18n from './languajes/i18n'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - polnac',
    title: 'polnac',
    htmlAttrs: {
      lang: 'es-MX'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/global.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    [
      'nuxt-i18n',{
        vueI18nLoader: true,
        defaultLocale: 'es',
        locales: [
          {
            code: 'eng',
            name: 'ENG'
          },
          {
            code: 'es',
            name: 'ESP'
          }
        ],
        vueI18n: i18n
      }
    ]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/markdownit',
    '@nuxtjs/proxy',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    //baseURL: 'http://localhost:1337',
    proxy: true
  },

  proxy: {
    "/salesforce": {
      target: 'https://test.salesforce.com/',
      pathRewrite: {'^/salesforce': '/'},
      secure: false
    },
    "/products": {
      target: 'https://polnac--bxt01.my.salesforce.com/',
      pathRewrite: {'^/products': '/'},
      changeOrigin: true
    },
    "/strapi" : 'http://localhost:1337',
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  markdownit: {
    rutime: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
