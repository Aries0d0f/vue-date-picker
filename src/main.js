import Vue              from 'vue'
import FontAwesomeIcon  from '@fortawesome/vue-fontawesome'
import fontawesome      from '@fortawesome/fontawesome'
import solid            from '@fortawesome/fontawesome-free-solid'
import vClickOutside from 'v-click-outside'

import App              from './App'

// Add fontawesome icon
fontawesome.library.add(solid)
Vue.component(FontAwesomeIcon.name, FontAwesomeIcon)

// Add outside click directive
Vue.use(vClickOutside)

const app = new Vue({
  ...App
}).$mount('#app')

export default { app }
