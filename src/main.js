import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueCookies from 'vue-cookies'
import './style.css'
import App from './App.vue'

const app = createApp(App)
app.use(createPinia())
app.use(VueCookies, { expire: "7d" })
app.mount('#app')
