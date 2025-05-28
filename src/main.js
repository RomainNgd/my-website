import './assets/main.css'
import 'aos/dist/aos.css'
import AOS from 'aos'

import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import App from './App.vue'
import router from './router'

AOS.init()

const app = createApp(App)
const head = createHead()

app.use(router)
app.use(head)

app.mount('#app')
