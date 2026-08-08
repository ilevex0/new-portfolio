import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { createGtag } from 'vue-gtag'

//CSS
import './assets/reset.css'
import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// Configuração do Google Analytics
const gtag = createGtag({
  config: { id: 'G-458PLV96VT' }
}, router)

app.use(gtag)
app.mount('#app')
