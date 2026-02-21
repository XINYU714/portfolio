<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { RouterView, useRouter } from 'vue-router'
import Footer from '@/components/Footer.vue'

const router = useRouter()

type ThemeMode = 'dark' | 'light'
const THEME_STORAGE_KEY = 'theme-mode'
const themeMode = ref<ThemeMode>('dark')

const setTheme = (mode: ThemeMode) => {
  themeMode.value = mode
  document.documentElement.classList.toggle('dark', mode === 'dark')
}

const handleToggleTheme = () => {
  const nextMode: ThemeMode = themeMode.value === 'dark' ? 'light' : 'dark'
  setTheme(nextMode)
  localStorage.setItem(THEME_STORAGE_KEY, nextMode)
}

onMounted(() => {
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY)
  if (savedTheme === 'light' || savedTheme === 'dark') {
    setTheme(savedTheme)
    return
  }
  setTheme('dark')
})
</script>

<template>
  <main class="w-full" :class="router.currentRoute.value.name === 'ProjectPage' ? 'page-project' : ''">
    <button
      class="fixed top-5 right-5 z-50 rounded-full border border-accent bg-primary px-4 py-2 text-sm font-bold text-light shadow-lg transition-colors hover:bg-accent"
      :aria-label="themeMode === 'dark' ? '切換為淺色模式' : '切換為深色模式'"
      @click="handleToggleTheme"
    >
      {{ themeMode === 'dark' ? '淺色模式' : '深色模式' }}
    </button>
    <transition name="fade" mode="out-in">
      <RouterView />
    </transition>
    <Footer />
  </main>
</template>
