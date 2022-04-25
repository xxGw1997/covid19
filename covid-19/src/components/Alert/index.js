import Alert from './index.vue'
import {
    h,
    render
} from 'vue'

function alert() {
    const VNode = h(Alert)
    const container = document.createElement('div')
    document.body.appendChild(container)
    render(VNode, container)
}

export {
    alert
}