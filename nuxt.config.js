export default {
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/global.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/vee-validate.js', mode: 'client' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/pwa'
  ],
  head: {
    titleTemplate: '%s',
    title: 'RoletDom – Rolety, moskitiery, żaluzje w Zakopanem!',
    htmlAttrs: {
      lang: 'pl'
    },
    meta: [
      { title: 'RoletDom – Rolety, moskitiery, żaluzje w Zakopanem!' },
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'RoletDom – Rolety, moskitiery, żaluzje w Zakopanem!'
      },
      {
        hid: 'apple-mobile-web-app-title',
        name: 'apple-mobile-web-app-title',
        content: 'RoletDom – Rolety, moskitiery, żaluzje w Zakopanem!'
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'RoletDom – Rolety, moskitiery, żaluzje w Zakopanem!'
      },
      { hid: 'author', name: 'author', content: 'RoletDom' },
      { hid: 'og:url', name: 'og:url', content: 'https://roletdom.eu' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Rolety, Moskitiery, Żaluzje, Plisy na wymiar z dowozem na terenie Zakopanego, Podhala, Bukowiny Tatrzańskiej, Białego Dunajca, Poronina.'
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content:
          'Rolety, Moskitiery, Żaluzje, Plisy na wymiar z dowozem na terenie Zakopanego, Podhala, Bukowiny Tatrzańskiej, Białego Dunajca, Poronina.'
      },
      {
        hid: 'og:favicon',
        rel: 'icon',
        type: 'image/x-icon',
        name: 'og:favicon',
        content: '/favicon.ico',
        href: '/favicon.ico'
      }
    ],
    link: [
      {
        hid: 'icon',
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },
  pwa: {
    workboxOptions: {
      importWorkboxFrom: 'local'
    },
    manifest: {
      name: 'RoletDom – Rolety, moskitiery, żaluzje w Zakopanem!',
      short_name: 'RoletDom – Rolety, moskitiery, żaluzje w Zakopanem!',
      description:
        'Rolety, Moskitiery, Żaluzje, Plisy na wymiar z dowozem na terenie Zakopanego, Podhala, Bukowiny Tatrzańskiej, Białego Dunajca, Poronina.',
      lang: 'pl',
      background_color: '#e31e25'
    }
  },
  loading: {
    color: '#e31e25',
    height: '2px'
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
