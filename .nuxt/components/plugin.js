import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  AboutUs: () => import('../../components/AboutUs.vue' /* webpackChunkName: "components/about-us" */).then(c => wrapFunctional(c.default || c)),
  Button: () => import('../../components/Button.vue' /* webpackChunkName: "components/button" */).then(c => wrapFunctional(c.default || c)),
  Footer: () => import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c)),
  Gallery: () => import('../../components/Gallery.vue' /* webpackChunkName: "components/gallery" */).then(c => wrapFunctional(c.default || c)),
  Header: () => import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c)),
  Home: () => import('../../components/Home.vue' /* webpackChunkName: "components/home" */).then(c => wrapFunctional(c.default || c)),
  Live: () => import('../../components/Live.vue' /* webpackChunkName: "components/live" */).then(c => wrapFunctional(c.default || c)),
  Navigation: () => import('../../components/Navigation.vue' /* webpackChunkName: "components/navigation" */).then(c => wrapFunctional(c.default || c)),
  FormsInput: () => import('../../components/forms/Input.vue' /* webpackChunkName: "components/forms-input" */).then(c => wrapFunctional(c.default || c)),
  FormsTextarea: () => import('../../components/forms/Textarea.vue' /* webpackChunkName: "components/forms-textarea" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
