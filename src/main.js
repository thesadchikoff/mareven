import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { createApp } from 'vue'
import vuePugPlugin from 'vue-pug-plugin'
import App from './App.vue'
import './style.scss'
import {loadIcons} from "./utils/icons.js";

const app = createApp(App)

app.use(vuePugPlugin)
loadIcons()
app.mount('#app')
