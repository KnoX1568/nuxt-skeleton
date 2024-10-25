import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify, type ThemeDefinition } from 'vuetify'

const customLightTheme: ThemeDefinition = {
    dark: false,
    colors: {
        background: '#FFFFFF',
        surface: '#FFFFFF',
        primary: '#FEA82F',
        'primary-darken-1': '#FF6701',
        secondary: '#757575',
        'secondary-darken-1': '#424242',
        error: '#B00020',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
    },
};

const customDarkTheme: ThemeDefinition = {
    dark: true,
    colors: {
        background: '#01040d',
        surface: '#01040d',
        primary: '#00C16A',
        'primary-darken-1': '#007F45',
        secondary: '#28369c',
        'secondary-darken-1': '#101857',
        error: '#B00020',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
    },
};

export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
        locale: {
            locale: 'de'
        },
        theme: {
            defaultTheme: 'customDarkTheme',
            themes: {
                customLightTheme,
                customDarkTheme
            }
        }
    })
    app.vueApp.use(vuetify)
})
