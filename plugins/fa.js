import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import * as solid from '@fortawesome/free-solid-svg-icons'
const { faBars, faXmark } = solid;

library.add(faBars)
library.add(faXmark)

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.component('FaIcon', FontAwesomeIcon)
})
