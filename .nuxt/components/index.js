import { wrapFunctional } from './utils'

export { default as AboutUs } from '../../components/AboutUs.vue'
export { default as Button } from '../../components/Button.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as Gallery } from '../../components/Gallery.vue'
export { default as Header } from '../../components/Header.vue'
export { default as Home } from '../../components/Home.vue'
export { default as Live } from '../../components/Live.vue'
export { default as Navigation } from '../../components/Navigation.vue'
export { default as FormsInput } from '../../components/forms/Input.vue'
export { default as FormsTextarea } from '../../components/forms/Textarea.vue'

export const LazyAboutUs = import('../../components/AboutUs.vue' /* webpackChunkName: "components/about-us" */).then(c => wrapFunctional(c.default || c))
export const LazyButton = import('../../components/Button.vue' /* webpackChunkName: "components/button" */).then(c => wrapFunctional(c.default || c))
export const LazyFooter = import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const LazyGallery = import('../../components/Gallery.vue' /* webpackChunkName: "components/gallery" */).then(c => wrapFunctional(c.default || c))
export const LazyHeader = import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const LazyHome = import('../../components/Home.vue' /* webpackChunkName: "components/home" */).then(c => wrapFunctional(c.default || c))
export const LazyLive = import('../../components/Live.vue' /* webpackChunkName: "components/live" */).then(c => wrapFunctional(c.default || c))
export const LazyNavigation = import('../../components/Navigation.vue' /* webpackChunkName: "components/navigation" */).then(c => wrapFunctional(c.default || c))
export const LazyFormsInput = import('../../components/forms/Input.vue' /* webpackChunkName: "components/forms-input" */).then(c => wrapFunctional(c.default || c))
export const LazyFormsTextarea = import('../../components/forms/Textarea.vue' /* webpackChunkName: "components/forms-textarea" */).then(c => wrapFunctional(c.default || c))
