export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: "static",
  loading: {
    color: "#ef4354",
    height: "5px",
  },
  
  
  head: {
    title: "Home | Desirefloors.lk",
    meta: [
      {
        charset: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        hid: "description",
        name: "description",
        content: "Desirefloors.lk | At the forefront of current design trends, Desire Floors is constantly focused on providing the best products and services that enhance the features of your home, your workplace and your business environment.",
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: "Home | Desirefloors.lk",
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: "Desirefloors.lk | At the forefront of current design trends, Desire Floors is constantly focused on providing the best products and services that enhance the features of your home, your workplace and your business environment.",
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://res.cloudinary.com/trekkerpoint-com/image/upload/w_400/v1597856094/desirefloors/logofull.png'
      },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: "Home | Desirefloors.lk",
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: "Home | Desirefloors.lk",
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: "Desirefloors.lk | At the forefront of current design trends, Desire Floors is constantly focused on providing the best products and services that enhance the features of your home, your workplace and your business environment.",
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://res.cloudinary.com/trekkerpoint-com/image/upload/w_400/v1597856094/desirefloors/logofull.png'
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: 'https://res.cloudinary.com/trekkerpoint-com/image/upload/w_400/v1597856094/desirefloors/logofull.png'
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: "Home | Desirefloors.lk",
      }
    ],
    link: [
      // {
      //   rel: 'preconnect',
      //   href: "https://app.snipcart.com"
      // },
      // {
      //   rel: 'preconnect',
      //   href: "https://cdn.snipcart.com"
      // },
      {
        rel: 'stylesheet',
        href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      },
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico",
      },
      {
        rel: "stylesheet",
        href:
          "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css",
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap",
      },
    ],
    script: [
      {
        src:
          "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js",
      },
      {
        // src: 'https://cdn.snipcart.com/themes/v3.0.16/default/snipcart.js'
      },
      {
        src:
          "https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js",
      },
      {
        src: "https://use.fontawesome.com/4bca920995.js",
      },
      {
        src:
          "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/css/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/lightGallery.client.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [
        ["@babel/plugin-proposal-private-methods", { "loose": true }]
      ]
    },
    transpile: [/^vue2-google-maps($|\/)/],
  },
}
