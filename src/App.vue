<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'
import Footer from '@/components/Footer.vue'
const router = useRouter()
</script>

<template>
  <main class="w-full" :class="router.currentRoute.value.name === 'ProjectPage' ? 'page-project' : ''">
    <transition name="fade" mode="out-in">
      <RouterView />
    </transition>
    <Footer />
  </main>
</template>

