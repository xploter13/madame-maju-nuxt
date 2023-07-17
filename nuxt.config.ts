// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "~/assets/css/main.css", 
    "~/assets/scss/index.scss",
    "~/assets/css/uicons-regular-rounded.css",
    "~/assets/css/font-awesome_6.4.0_css_all.min.css"
  ],
  /* postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }, */
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: "pt-BR",
      },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title:
        "Madame Maju - Moda Feminina, Moda Íntima, Cama Mesa e Banho, Acessórios e Eletrônicos",
      meta: [{ name: "description", content: "Madame Maju" }],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap",
        },
      ],
      script: [
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.4.0/mdb.min.js",
        },
      ],
    },
  },
  build: {
    transpile: ["mdb-vue-ui-kit"],
  },
  modules: [
    '@nuxt/image',
  ]
});
