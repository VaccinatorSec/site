import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
	modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode'
    ],

    colorMode: {
        classSuffix: ''
    },
    server: {
        port: 22124
    }
})
