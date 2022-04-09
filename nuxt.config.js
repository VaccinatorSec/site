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
    },

    privateRuntimeConfig: {
        HCAPTCHA_SECRET: process.env.HCAPTCHA_SECRET,
        EMAIL_SECRET: process.env.EMAIL_SECRET
    },

    build: {
        transpile: ['@fortawesome/fontawesome-svg-core', '@fortawesome/vue-fontawesome', '@fortawesome/free-solid-svg-icons']
    }
})
