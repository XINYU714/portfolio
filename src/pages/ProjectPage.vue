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
    <div class="container mx-auto px-5 lg:px-10 py-10">
        <section class="py-10 lg:py-20 flex gap-10 justify-between items-center flex-col lg:flex-row">
          <div class="flex-1 lg:flex-6">
            <h1 class="text-3xl font-bold mb-5">{{ projectItem?.title }}</h1>
            <p>{{ projectItem?.description }}</p>
            <div class="flex gap-2 mt-5">
              <div v-for="(tag, index) in projectItem?.tags" :key="index" class="inline-block px-2 py-1 rounded-full bg-accent text-contrast text-sm">{{ tag }}</div>
            </div>
            <p class="text-muted text-sm mt-2 text-right">{{ projectItem?.date }}</p>
            <a v-if="officialWebsite" :href="officialWebsite.url" target="_blank" class="block mt-5 w-fit ml-auto hover:text-accent transition-colors">
              <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.857 4.90421C10.3892 2.02299 9.28574 0 8.00161 0C6.71748 0 5.61404 2.02299 5.1462 4.90421H10.857ZM4.90421 8.00161C4.90421 8.71789 4.94293 9.40512 5.01069 10.0665H10.9893C11.0571 9.40512 11.0958 8.71789 11.0958 8.00161C11.0958 7.28534 11.0571 6.5981 10.9893 5.93668H5.01069C4.94293 6.5981 4.90421 7.28534 4.90421 8.00161ZM15.3805 4.90421C14.4578 2.71345 12.5896 1.01956 10.2827 0.335552C11.07 1.42609 11.612 3.06836 11.8959 4.90421H15.3805ZM5.71728 0.335552C3.41359 1.01956 1.54225 2.71345 0.622706 4.90421H4.10728C4.38798 3.06836 4.93003 1.42609 5.71728 0.335552ZM15.7258 5.93668H12.025C12.0928 6.61424 12.1315 7.30793 12.1315 8.00161C12.1315 8.6953 12.0928 9.38899 12.025 10.0665H15.7225C15.9 9.40512 16 8.71789 16 8.00161C16 7.28534 15.9 6.5981 15.7258 5.93668ZM3.87175 8.00161C3.87175 7.30793 3.91047 6.61424 3.97822 5.93668H0.277475C0.103247 6.5981 0 7.28534 0 8.00161C0 8.71789 0.103247 9.40512 0.277475 10.0665H3.975C3.91047 9.38899 3.87175 8.6953 3.87175 8.00161ZM5.1462 11.099C5.61404 13.9802 6.71748 16.0032 8.00161 16.0032C9.28574 16.0032 10.3892 13.9802 10.857 11.099H5.1462ZM10.2859 15.6677C12.5896 14.9837 14.461 13.2898 15.3837 11.099H11.8992C11.6152 12.9349 11.0732 14.5771 10.2859 15.6677ZM0.622706 11.099C1.54547 13.2898 3.41359 14.9837 5.72051 15.6677C4.93325 14.5771 4.39121 12.9349 4.10728 11.099H0.622706Z" fill="currentColor"/>
              </svg>
            </a>
          </div>
          <!-- // image -->
          <div class="flex-1 lg:flex-6 relative">
            <img :src="projectItem?.image" :alt="projectItem?.title" class="w-full h-auto rounded-lg relative z-10">
            <div class="absolute bg-primary pt-2 pl-2 w-full h-full rounded-lg -bottom-4 -right-4 border-secondary border-2"></div>
          </div>
        </section>
        <section class="flex gap-10 justify-between relative">
          <div class="flex-8">
            <component :is="componentMap[item.type]" v-for="(item, index) in projectItem?.itemList" :key="`${item.type}-${index}`" v-bind="item" />
          </div>
          <div v-if="tocList.length > 0" class="flex-3 hidden lg:block sticky top-20 self-start justify-items-center">
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
        <router-link to="/" class="flex items-center gap-2 w-fit bg-primary text-light p-4 rounded-full mt-10 hover:bg-accent transition-colors">
         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 8L8 12L12 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16 12H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        回首頁
        </router-link>
    </div>
</template>