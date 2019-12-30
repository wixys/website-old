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
  css: [],
  
  router: {              // customize nuxt.js router (vue-router).
    middleware: 'i18n'   // middleware all pages of the application
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/i18n.js',
  ],

  env: {
    apiUrl: "https://backend.gowix.net/api/",
    apiVersion: "v1",
    platform: "atasun",
    gowixApiKey: "b8f43bb54471b5a319bd697d5b457c0836173e8r"
  },

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    "bootstrap-vue/nuxt"
  ],

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
