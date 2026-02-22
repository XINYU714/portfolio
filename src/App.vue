<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import Footer from '@/components/Footer.vue'
import { PROJECT_LIST } from '@/constants/project'
import { PROFILE } from '@/constants/profile'
import sunIcon from '@/assets/img/sun.svg'
import moonIcon from '@/assets/img/moon.svg'



const route = useRoute()

type ThemeMode = 'dark' | 'light'
const THEME_STORAGE_KEY = 'theme-mode'
const DEFAULT_DESCRIPTION = PROFILE.summary
const DEFAULT_TITLE = `${PROFILE.siteName} | ${PROFILE.role}`
const themeMode = ref<ThemeMode>('dark')
const projectId = computed(() => (typeof route.params.id === 'string' ? route.params.id : ''))
const currentProject = computed(() => PROJECT_LIST.find((item) => item.id === projectId.value))
const isProjectPage = computed(() => route.name === 'ProjectPage')

const setTheme = (mode: ThemeMode) => {
  themeMode.value = mode
  document.documentElement.classList.toggle('dark', mode === 'dark')
}

const handleToggleTheme = () => {
  const nextMode: ThemeMode = themeMode.value === 'dark' ? 'light' : 'dark'
  setTheme(nextMode)
  localStorage.setItem(THEME_STORAGE_KEY, nextMode)
}

const getOrCreateMetaTag = (key: string, attr: 'name' | 'property') => {
  let meta = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!meta) {
    meta = document.createElement('meta')
    meta.setAttribute(attr, key)
    document.head.appendChild(meta)
  }
  return meta
}

const getOrCreateCanonical = () => {
  let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    document.head.appendChild(canonical)
  }
  return canonical
}

const updateHeadMeta = () => {
  const pageTitle = currentProject.value
    ? `${currentProject.value.title} | ${PROFILE.siteName}`
    : route.name === 'NotFoundPage'
      ? `404 | ${PROFILE.siteName}`
      : DEFAULT_TITLE
  const pageDescription = currentProject.value?.description ?? DEFAULT_DESCRIPTION
  const pageUrl = window.location.href
  const pageImage = currentProject.value?.image
    ? new URL(currentProject.value.image, window.location.origin).href
    : ''

  document.title = pageTitle
  getOrCreateMetaTag('description', 'name').setAttribute('content', pageDescription)
  getOrCreateMetaTag('og:type', 'property').setAttribute('content', 'website')
  getOrCreateMetaTag('og:site_name', 'property').setAttribute('content', PROFILE.siteName)
  getOrCreateMetaTag('og:title', 'property').setAttribute('content', pageTitle)
  getOrCreateMetaTag('og:description', 'property').setAttribute('content', pageDescription)
  getOrCreateMetaTag('og:url', 'property').setAttribute('content', pageUrl)
  getOrCreateMetaTag('og:image', 'property').setAttribute('content', pageImage)
  getOrCreateCanonical().setAttribute('href', pageUrl)
}

onMounted(() => {
  updateHeadMeta()
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY)
  if (savedTheme === 'light' || savedTheme === 'dark') {
    setTheme(savedTheme)
    return
  }
  setTheme('dark')
})

watch(() => route.fullPath, updateHeadMeta)
</script>

<template>
  <main :class="isProjectPage ? 'page-project' : ''">
    <button
      class="fixed top-5 right-5 z-50 rounded-full p-2 transition-colors bg-accent hover:bg-accent/75 cursor-pointer"
      :aria-label="themeMode === 'dark' ? '切換為淺色模式' : '切換為深色模式'"
      @click="handleToggleTheme"
    >
      <img v-if="themeMode === 'dark'" :src="moonIcon" class="" alt="深色模式">
      <img v-else :src="sunIcon" alt="淺色模式">
    </button>
    <RouterView />
    <Footer />
  </main>
</template>
