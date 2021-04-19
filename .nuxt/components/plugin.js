import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Button: () => import('../../components/Button.vue' /* webpackChunkName: "components/button" */).then(c => wrapFunctional(c.default || c)),
  Navigation: () => import('../../components/Navigation.vue' /* webpackChunkName: "components/navigation" */).then(c => wrapFunctional(c.default || c)),
  FormsInput: () => import('../../components/forms/Input.vue' /* webpackChunkName: "components/forms-input" */).then(c => wrapFunctional(c.default || c)),
  FormsTextarea: () => import('../../components/forms/Textarea.vue' /* webpackChunkName: "components/forms-textarea" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
