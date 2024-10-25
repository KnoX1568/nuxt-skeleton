import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
        locale: {
            locale: 'de'
        },
        theme: {
            defaultTheme: 'light'
        }
    })
    app.vueApp.use(vuetify)
})
