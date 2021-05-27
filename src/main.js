/* eslint-disable import/first */
require('dotenv').config()

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './index.css'

// LOG ROCKET CONFIGURATION
import LogRocket from 'logrocket'

// VILLUS CONFIGURATION
import { createClient } from 'villus'
const client = createClient({ url: process.env.VUE_APP_API_URL })

LogRocket.init('nckyti/sudoers-remuneraciones')

const app = createApp(App)
app.use(store)
app.use(router)
app.use(client)
app.mount('#app')
