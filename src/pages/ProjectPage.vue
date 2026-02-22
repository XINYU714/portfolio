<script lang="ts" setup>
import { computed, onMounted, onUnmounted, ref } from 'vue';
import type { Component } from 'vue';
import { useRoute } from 'vue-router';
import ArticleTitle from '@/components/Article/ArticleTitle.vue';
import ArticleContent from '@/components/Article/ArticleContent.vue';
import ArticleSingleImage from '@/components/Article/ArticleSingleImage.vue';
import ArticleLink from '@/components/Article/ArticleLink.vue';
import ArticleSubtitle from '@/components/Article/ArticleSubtitle.vue';
import ArticleQuote from '@/components/Article/ArticleQuote.vue';
import { PROJECT_LIST } from '@/constants/project';


const componentMap: Record<string, Component> = {
  title: ArticleTitle,
  content: ArticleContent,
  image: ArticleSingleImage,
  link: ArticleLink,
  subtitle: ArticleSubtitle,
  quote: ArticleQuote,
}
const id = computed(() => useRoute().params.id)
const projectItem = computed(() => PROJECT_LIST.find((item) => item.id === id.value))
const tocList = computed(() => projectItem.value?.itemList.filter((item) => item.type === 'title').map((item) => item.content) || [])
const officialWebsite = computed(() => projectItem.value?.website?.find((item) => item.type === 'official'))
const githubWebsite = computed(() => projectItem.value?.website?.find((item) => item.type === 'github'))

const activeIndex = ref(0);
const handleScrollToSection = (index: number) => {
  const articleTitle = document.querySelectorAll('.article-title');
  articleTitle[index]?.scrollIntoView({ behavior: 'smooth', })
}
const intersectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const allTitles = Array.from(document.querySelectorAll('.article-title'));
      const index = allTitles.indexOf(entry.target);
      if (index !== -1) {
        activeIndex.value = index;
      }
    }
  })
}, { rootMargin: '0px 0px -50% 0px', threshold: 0.5 })

onMounted(() => {
  const articleTitle = document.querySelectorAll('.article-title');
  articleTitle.forEach((title) => {
    intersectionObserver.observe(title)
  })
  window.scrollTo(0, 0) // 置頂
})
onUnmounted(() => {
  intersectionObserver.disconnect()
})
</script>

<template>
    <div class="main-container py-10">
        <section class="py-10 lg:py-20 flex justify-between items-center gap-10 flex-col lg:flex-row">
          <div class="flex-1 lg:flex-6">
            <h1 class="text-3xl font-bold mb-5">{{ projectItem?.title }}</h1>
            <p>{{ projectItem?.description }}</p>
            <div class="flex flex-wrap gap-2 mt-5">
              <div v-for="(tag, index) in projectItem?.tags" :key="index" class="tag">{{ tag }}</div>
            </div>
            <p class="text-muted text-sm mt-2 text-right">{{ projectItem?.date }}</p>
            <div class="mt-5">
              <a v-if="officialWebsite" :href="officialWebsite.url" target="_blank" class="block w-fit ml-auto hover:text-accent transition-colors">
                <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.857 4.90421C10.3892 2.02299 9.28574 0 8.00161 0C6.71748 0 5.61404 2.02299 5.1462 4.90421H10.857ZM4.90421 8.00161C4.90421 8.71789 4.94293 9.40512 5.01069 10.0665H10.9893C11.0571 9.40512 11.0958 8.71789 11.0958 8.00161C11.0958 7.28534 11.0571 6.5981 10.9893 5.93668H5.01069C4.94293 6.5981 4.90421 7.28534 4.90421 8.00161ZM15.3805 4.90421C14.4578 2.71345 12.5896 1.01956 10.2827 0.335552C11.07 1.42609 11.612 3.06836 11.8959 4.90421H15.3805ZM5.71728 0.335552C3.41359 1.01956 1.54225 2.71345 0.622706 4.90421H4.10728C4.38798 3.06836 4.93003 1.42609 5.71728 0.335552ZM15.7258 5.93668H12.025C12.0928 6.61424 12.1315 7.30793 12.1315 8.00161C12.1315 8.6953 12.0928 9.38899 12.025 10.0665H15.7225C15.9 9.40512 16 8.71789 16 8.00161C16 7.28534 15.9 6.5981 15.7258 5.93668ZM3.87175 8.00161C3.87175 7.30793 3.91047 6.61424 3.97822 5.93668H0.277475C0.103247 6.5981 0 7.28534 0 8.00161C0 8.71789 0.103247 9.40512 0.277475 10.0665H3.975C3.91047 9.38899 3.87175 8.6953 3.87175 8.00161ZM5.1462 11.099C5.61404 13.9802 6.71748 16.0032 8.00161 16.0032C9.28574 16.0032 10.3892 13.9802 10.857 11.099H5.1462ZM10.2859 15.6677C12.5896 14.9837 14.461 13.2898 15.3837 11.099H11.8992C11.6152 12.9349 11.0732 14.5771 10.2859 15.6677ZM0.622706 11.099C1.54547 13.2898 3.41359 14.9837 5.72051 15.6677C4.93325 14.5771 4.39121 12.9349 4.10728 11.099H0.622706Z" fill="currentColor"/>
                </svg>
              </a>
              <a v-if="githubWebsite" :href="githubWebsite.url" target="_blank" class="block w-fit ml-auto hover:text-accent transition-colors">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.35161 12.5613C5.35161 12.6258 5.27742 12.6774 5.18387 12.6774C5.07742 12.6871 5.00323 12.6355 5.00323 12.5613C5.00323 12.4968 5.07742 12.4452 5.17097 12.4452C5.26774 12.4355 5.35161 12.4871 5.35161 12.5613ZM4.34839 12.4161C4.32581 12.4806 4.39032 12.5548 4.4871 12.5742C4.57097 12.6065 4.66774 12.5742 4.6871 12.5097C4.70645 12.4452 4.64516 12.371 4.54839 12.3419C4.46452 12.3194 4.37097 12.3516 4.34839 12.4161ZM5.77419 12.3613C5.68064 12.3839 5.61613 12.4452 5.62581 12.5194C5.63548 12.5839 5.71935 12.6258 5.81613 12.6032C5.90968 12.5806 5.97419 12.5194 5.96452 12.4548C5.95484 12.3935 5.86774 12.3516 5.77419 12.3613ZM7.89677 0C3.42258 0 0 3.39677 0 7.87097C0 11.4484 2.25161 14.5097 5.46774 15.5871C5.88064 15.6613 6.02581 15.4065 6.02581 15.1968C6.02581 14.9968 6.01613 13.8935 6.01613 13.2161C6.01613 13.2161 3.75806 13.7 3.28387 12.2548C3.28387 12.2548 2.91613 11.3161 2.3871 11.0742C2.3871 11.0742 1.64839 10.5677 2.43871 10.5774C2.43871 10.5774 3.24194 10.6419 3.68387 11.4097C4.39032 12.6548 5.57419 12.2968 6.03548 12.0839C6.10968 11.5677 6.31936 11.2097 6.55161 10.9968C4.74839 10.7968 2.92903 10.5355 2.92903 7.43226C2.92903 6.54516 3.17419 6.1 3.69032 5.53226C3.60645 5.32258 3.33226 4.45806 3.77419 3.34194C4.44839 3.13226 6 4.2129 6 4.2129C6.64516 4.03226 7.33871 3.93871 8.02581 3.93871C8.7129 3.93871 9.40645 4.03226 10.0516 4.2129C10.0516 4.2129 11.6032 3.12903 12.2774 3.34194C12.7194 4.46129 12.4452 5.32258 12.3613 5.53226C12.8774 6.10323 13.1935 6.54839 13.1935 7.43226C13.1935 10.5452 11.2935 10.7935 9.49032 10.9968C9.7871 11.2516 10.0387 11.7355 10.0387 12.4935C10.0387 13.5806 10.029 14.9258 10.029 15.1903C10.029 15.4 10.1774 15.6548 10.5871 15.5806C13.8129 14.5097 16 11.4484 16 7.87097C16 3.39677 12.371 0 7.89677 0ZM3.13548 11.1258C3.09355 11.1581 3.10323 11.2323 3.15806 11.2935C3.20968 11.3452 3.28387 11.3677 3.32581 11.3258C3.36774 11.2935 3.35806 11.2194 3.30323 11.1581C3.25161 11.1065 3.17742 11.0839 3.13548 11.1258ZM2.7871 10.8645C2.76452 10.9065 2.79677 10.9581 2.86129 10.9903C2.9129 11.0226 2.97742 11.0129 3 10.9677C3.02258 10.9258 2.99032 10.8742 2.92581 10.8419C2.86129 10.8226 2.80968 10.8323 2.7871 10.8645ZM3.83226 12.0129C3.78065 12.0548 3.8 12.1516 3.87419 12.2129C3.94839 12.2871 4.04194 12.2968 4.08387 12.2452C4.12581 12.2032 4.10645 12.1065 4.04194 12.0452C3.97097 11.971 3.87419 11.9613 3.83226 12.0129ZM3.46452 11.5387C3.4129 11.571 3.4129 11.6548 3.46452 11.729C3.51613 11.8032 3.60323 11.8355 3.64516 11.8032C3.69677 11.7613 3.69677 11.6774 3.64516 11.6032C3.6 11.529 3.51613 11.4968 3.46452 11.5387Z" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>
          <div class="relative flex-1 lg:flex-6">
            <img :src="projectItem?.image" :alt="projectItem?.title" class="relative w-full h-auto rounded-lg z-10">
            <div class="absolute bg-primary pt-2 pl-2 w-full h-full rounded-lg -bottom-4 -right-4 border-secondary border-2"></div>
          </div>
        </section>
        <section class="flex gap-10 justify-between">
          <div class="flex-8">
            <component :is="componentMap[item.type]" v-for="(item, index) in projectItem?.itemList" :key="`${item.type}-${index}`" v-bind="item" />
          </div>
          <div v-if="tocList.length > 0" class="sticky top-20 flex-3 hidden lg:block self-start justify-items-center">
            <ul class="w-fit">
              <li v-for="(item, index) in tocList" 
                  :key="`${item}-${index}`" 
                  @click="handleScrollToSection(index)" 
                  class="nav-title py-2 cursor-pointer transition-colors hover:text-accent"
                  :class="{ 'text-accent font-bold ': activeIndex === index, 'text-muted': activeIndex !== index }"
              >
                {{ item }}
              </li>
            </ul>
          </div>
        </section>
        <router-link to="/" class="main-button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 8L8 12L12 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16 12H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          回首頁
        </router-link>
    </div>
</template>