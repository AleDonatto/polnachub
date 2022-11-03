import colors from 'vuetify/es5/util/colors'
import i18n from './languajes/i18n'

export default {
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s | Polímeros Nacionales',
    title: 'POLNAC',
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
    '~/assets/content-styles.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/vue2-google-maps.js"}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    /*[
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
    ],*/
    '@nuxtjs/dotenv'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/markdownit',
    '@nuxtjs/proxy',
    'vue-social-sharing/nuxt',
    '@nuxtjs/i18n',
  ],

  i18n: {
    /* module options */
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
  },

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
    "/information": {
      target: 'https://polnac--bxt01.sandbox.my.salesforce.com/',
      pathRewrite: {'^/information': '/'},
      secure: false
    },
    "/strapi" : {
      //target: 'http://localhost:1337/',
      target: process.env.BASE_URI_STRAPI,
      pathRewrite: {'^/strapi': '/'},
      secure: false 
    } 
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
    preset: 'default',
    linkify: true,
    breaks: true,
    injected: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: ['vue2-google-map']
  },

  dotenv: {
    pruebas: 'test'
  }
}
