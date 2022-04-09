import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

library.add(faBars)
library.add(faXmark)

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.component('FaIcon', FontAwesomeIcon)
})
