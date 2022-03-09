import { defineNuxtConfig } from 'nuxt3'
import Components from 'unplugin-vue-components/vite'
import { TDesignResolver } from 'unplugin-vue-components/resolvers'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    vite: {
        plugins: [
            Components({
                dts: true,
                resolvers: [
                    TDesignResolver({
                        library: 'vue-next',
                        resolveIcons: true
                    }),
                ]
            })
        ]
    }
})
