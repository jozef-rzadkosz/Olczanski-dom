import { wrapFunctional } from './utils'

export { default as Button } from '../../components/Button.vue'
export { default as Navigation } from '../../components/Navigation.vue'
export { default as FormsInput } from '../../components/forms/Input.vue'
export { default as FormsTextarea } from '../../components/forms/Textarea.vue'

export const LazyButton = import('../../components/Button.vue' /* webpackChunkName: "components/button" */).then(c => wrapFunctional(c.default || c))
export const LazyNavigation = import('../../components/Navigation.vue' /* webpackChunkName: "components/navigation" */).then(c => wrapFunctional(c.default || c))
export const LazyFormsInput = import('../../components/forms/Input.vue' /* webpackChunkName: "components/forms-input" */).then(c => wrapFunctional(c.default || c))
export const LazyFormsTextarea = import('../../components/forms/Textarea.vue' /* webpackChunkName: "components/forms-textarea" */).then(c => wrapFunctional(c.default || c))
