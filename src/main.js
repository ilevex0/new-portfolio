import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VueGtag from 'vue-gtag'

//CSS
import './assets/reset.css'
import './assets/main.css'

const app = createApp(App)

// Configuração do Google Analytics
app.use(VueGtag, {
  config: { id: 'G-458PLV96VT' }
}, router)

app.use(createPinia())
app.use(router)

app.mount('#app')
