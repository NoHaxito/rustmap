// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [ "@nuxt/content", "@nuxtjs/tailwindcss", "@nuxtjs/seo" ],
  site: {
    name: 'Hoja de Ruta Definitiva para Aprender Rust: Desde Principiante hasta Experto',
    description: `
¿Estás listo para dominar uno de los lenguajes de programación más potentes y eficientes? Nuestra hoja de ruta te guiará paso a paso en tu viaje de aprendizaje de Rust, desde los conceptos básicos hasta las técnicas avanzadas. Diseñada para principiantes y desarrolladores experimentados, esta guía exhaustiva te ayudará a construir una sólida base en Rust y a aprovechar al máximo su rendimiento, seguridad y concurrencia.
Aprenderás a través de ejemplos prácticos, ejercicios desafiantes y proyectos reales, lo que te permitirá aplicar tus nuevas habilidades de inmediato. Además, explorarás las mejores prácticas y las últimas tendencias en el ecosistema de Rust, asegurándote de estar siempre un paso adelante.
Ya sea que desees desarrollar aplicaciones de sistemas, videojuegos, criptomonedas o cualquier otro proyecto, nuestra hoja de ruta te preparará para dominar Rust y destacarte en el mundo del desarrollo de software. ¡Comienza tu viaje hoy y conviértete en un experto en Rust!
    `,
    defaultLocale: 'es'
  },
  ogImage: {
    runtimeChromium: false,
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1'
    }
  },
})
