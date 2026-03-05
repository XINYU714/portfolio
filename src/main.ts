import { createApp } from 'vue'
import '@/style.css'
import App from '@/App.vue'
import router from '@/router'

const savedTheme = localStorage.getItem('theme-mode')
document.documentElement.classList.toggle('dark', savedTheme === 'dark')

createApp(App).use(router).mount('#app')
