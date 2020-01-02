import pkg from "./package";

export default {
  mode: "universal",

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },

  /*
   ** Global CSS
   */
  css: [
    '~/assets/css/custom.css',
  ],

  router: {              // customize nuxt.js router (vue-router).
    middleware: 'i18n'   // middleware all pages of the application
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/i18n.js',
    '~/plugins/fontawesome.js',
  ],

  env: {
    //-- Company info
    brand: {
      company: 'Logo Website skeleton',
      title: 'Logo Website skeleton',
      description: 'Website skeleton to build landing pages, corporative websites, e-commerce, or any platform, etc.'
    },
    //-- Social Media
    socialMedia: {
      facebookUrl: 'https://www.facebook.com/WixysGlobalSolutions/', 
      twitterUrl: 'https://twitter.com/wixys', 
      instagramUrl: '', 
      linkedinUrl: 'https://www.linkedin.com/company/10852094/',
      youtubeUrl: ''
    },
    //-- API
    apiUrl: "https://backend.gowix.net/api/",
    apiVersion: "v1",
    platform: "atasun",
    gowixApiKey: "b8f43bb54471b5a319bd697d5b457c0836173e8r",
    //-- UI Settings
    search: false,
    multilang: false,
    profile: false
  },

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/device',
    '@neneos/nuxt-animate.css',
    '@nuxtjs/moment',
    ['@nuxtjs/google-analytics', {
      id: 'UA-XXXXXX'
    }],
    ['nuxt-validate', {
      lang: 'es',
      nuxti18n: {
        locale: {
          'es-ES': 'es_ES'
        }
      }
    }]
  ],
  webfontloader: {
    google: {
      families: ['Open+Sans:400,700']
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    vendor: [
      'vue-i18n', // webpack vue-i18n.bundle.js

    ], 

    extend(config, ctx) {}
  }
};
