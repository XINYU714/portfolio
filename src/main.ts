import { createApp } from 'vue'
import '@/style.css'
import App from '@/App.vue'
import router from '@/router'

const savedTheme = localStorage.getItem('theme-mode')
const initialIsDark = savedTheme ? savedTheme === 'dark' : true
document.documentElement.classList.toggle('dark', initialIsDark)

createApp(App).use(router).mount('#app')
