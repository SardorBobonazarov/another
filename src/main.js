import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import AOS from 'aos'

import './assets/css/main.css'
import './assets/css/responsive.scss'
import "bootstrap/dist/css/bootstrap.min.css"
import 'aos/dist/aos.css'

import "bootstrap/dist/js/bootstrap.js"

const lang = localStorage.setItem('lang', 'uz')

const app = createApp(App)

app.use(router).use(store).use(AOS.init())

app.mount('#app')
