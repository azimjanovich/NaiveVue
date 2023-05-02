import { createApp, h } from 'vue'
import { createPinia } from 'pinia'
import { NLoadingBarProvider, NMessageProvider } from 'naive-ui';
import VueCookies from 'vue-cookies'
import router from './router'
import './style.css'
import App from './App.vue'
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'
import Footer from './components/Footer.vue'


const app = createApp(
    h(NLoadingBarProvider, () =>
        h(NMessageProvider, () =>
            h(App))
    )
)

app.use(createPinia())
app.use(VueCookies, { expire: "7d" })
app.use(router)
app.component('Navbar', Navbar)
app.component('Sidebar', Sidebar)
app.component('Footer', Footer)
app.mount('#app')
