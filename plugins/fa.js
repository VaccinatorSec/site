import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faBars, faXmark, faCheck, faExclamation } from '@fortawesome/free-solid-svg-icons'

library.add(faBars)
library.add(faXmark)
library.add(faCheck)
library.add(faExclamation)

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.component('FaIcon', FontAwesomeIcon)
})
