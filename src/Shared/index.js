import EtvButton from './tailwind/ETV-Button';
import EtvLogo from './tailwind/ETV-Logo'
import EtvTitle from './tailwind/ETV-Title'

export function widgets(Vue) {
    Vue.component('EtvButton', EtvButton);
    Vue.component('EtvLogo', EtvLogo);
    Vue.component('EtvTitle', EtvTitle);
}
