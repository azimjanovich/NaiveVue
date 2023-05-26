import { h, ref, reactive } from 'vue'
import { NIcon } from 'naive-ui'
import { defineStore } from 'pinia'

window.h = h
window.ref = ref
window.reactive = reactive
window.defineStore = defineStore

window.renderIcon = (icon) => {
    return () => h(NIcon, null, { default: () => h(icon) });
}

localStorage.getItem('breadcrumbs') === null ? localStorage.setItem('breadcrumbs', JSON.stringify(
    [{
        name: 'Home page',
        routerName: 'cabinet.home',
        isActive: false,
        closable: false
    }]
)) : false