export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Gracious Coutour',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel: 'preconnect', href: 'https://app.snipcart.com' },
      // { rel: 'preconnect', href: 'https://cdn.snipcart.com' },
      // {
      //   rel: 'stylesheet',
      //   href: 'https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.css',
      // },
    ],
    // script: [
    //   {
    //     src: 'https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.js',
    //     async: true,
    //   },
    // ],
  },

  env: {
    storeUrl:
      'http://localhost:3000/' ||
      'https://gracious-couture-backend.onrender.com',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/vue-zoomer.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@braid/vue-formulate/nuxt',
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/snipcart',
    '@nuxt/image',
  ],
  snipcart: {
    // Options available

    key: 'NGIyNjQ0MWQtYWI1Yi00YzdjLTg1MDgtZTJkMmEyYjE0YWVkNjM3Njk3NDYxMTI1NzM1MDAw' /* required https://app.snipcart.com/dashboard/account/credentials */,
    attributes: [
      ['data-config-modal-style', 'side'],
      // ['data-config-add-product-behavior', 'none']
    ],
  },
  image: {
    dir: '/static',
    alias: {
      unsplash: 'https://images.unsplash.com',
    },
  },
  publicRuntimeConfig: {
    graphQL: 'https://strapi-oji7.onrender.com/graphql',
    baseURL: 'https://strapi-oji7.onrender.com',
    storeUrl: process.env.STORE_URL,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxt/http', '@nuxtjs/axios', '@nuxtjs/apollo', '@nuxt/image'],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'https://strapi-oji7.onrender.com/graphql',
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  serverMiddleware: {
    '/_ipx': '~/server/middleware/ipx.js',
  },
}
