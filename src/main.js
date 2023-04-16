import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import '@/style/m-public.scss'
import { Toast } from 'vant'
// import Vconsole from 'vconsole'
// let vConsole = new Vconsole()

const app = createApp(App)

// app.use(vConsole)
app.use(Toast)
app.use(createPinia())
app.use(router)
app.mount('#app')
