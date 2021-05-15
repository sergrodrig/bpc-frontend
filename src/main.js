/* eslint-disable import/first */
require('dotenv').config()

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import LogRocket from 'logrocket'
import { createClient } from 'villus'

const client = createClient({
  url: process.env.VUE_APP_API_URL
})

LogRocket.init('nckyti/sudoers-remuneraciones')

createApp(App)
  .use(store)
  .use(router)
  .use(client)
  .mount('#app')
