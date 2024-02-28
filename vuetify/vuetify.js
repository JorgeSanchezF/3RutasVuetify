import '@fortawesome/fontawesome-free/css/all.css'
import { createVuetify } from 'vuetify/lib/framework.mjs'
import 'vuetify/styles'
import { aliases, fa } from 'vuetify/iconsets/fa'

/**
 * fontawesome añadido con npm install @fortawesome/fontawesome-free -D 
 * https://vuetifyjs.com/en/features/icon-fonts/#fa-5-css
*/
export default createVuetify({
    icons: { defaultSet: 'fa', aliases, sets: { fa } },
    theme: {
        defaultTheme: 'dark'
    }
})