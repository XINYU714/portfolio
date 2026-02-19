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
import { PROJECT_LIST } from '@/utils/constant';


const componentMap: Record<string, Component> = {
  title: ArticleTitle,
  content: ArticleContent,
  image: ArticleSingleImage,
  link: ArticleLink,
  subtitle: ArticleSubtitle,
  quote: ArticleQuote,
}
const id = computed(() => useRoute().params.id)
const projectItem = computed(() => PROJECT_LIST.find((item) => item.id === Number(id.value)))
const tocList = computed(() => projectItem.value?.itemList.filter((item) => item.type === 'title').map((item) => item.content) || [])
const activeIdx = ref(0);
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
        activeIdx.value = index;
      }
    }
  })
}, { rootMargin: '0px 0px -50% 0px', threshold: 0.5 })

onMounted(() => {
  const articleTitle = document.querySelectorAll('.article-title');
  articleTitle.forEach((title) => {
    intersectionObserver.observe(title)
  })
})
onUnmounted(() => {
  intersectionObserver.disconnect()
})
</script>

<template>
    <div class="container mx-auto px-5 lg:px-10 py-10">
        <section class="py-20 flex gap-10 justify-between items-center">
          <div class="flex-6">
            <h1 class="text-3xl font-bold mb-5">{{ projectItem?.title }}</h1>
            <p>{{ projectItem?.description }}</p>
            <div class="flex gap-2 mt-5">
              <div v-for="(tag, index) in projectItem?.tags" :key="index" class="inline-block px-2 py-1 rounded-full bg-accent text-white text-sm">{{ tag }}</div>
            </div>
            <p class="text-gray-400 text-sm mt-5 text-right">{{ projectItem?.date }}</p>
          </div>
          <div class="flex-6 relative">
            <img :src="projectItem?.image" :alt="projectItem?.title" class="w-full h-auto rounded-lg relative z-10">
            <div class="absolute bg-primary pt-2 pl-2 w-full h-full rounded-lg -bottom-4 -right-4 border-secondary border-2"></div>
          </div>
        </section>
        <section class="flex gap-10 justify-between relative">
          <div class="flex-8">
            <component :is="componentMap[item.type]" v-for="(item, index) in projectItem?.itemList" :key="`${item.type}-${index}`" v-bind="item" />
          </div>
          <div v-if="tocList.length > 0" class="flex-3 sticky top-20 self-start justify-items-center">
            <ul class="w-fit">
              <li v-for="(item, index) in tocList" 
                  :key="`${item}-${index}`" 
                  @click="handleScrollToSection(index)" 
                  class="nav-title py-2 cursor-pointer transition-colors hover:text-accent"
                  :class="{ 'text-accent font-bold ': activeIdx === index, 'text-gray-400': activeIdx !== index }"
              >
                {{ item }}
              </li>
            </ul>
          </div>
        </section>
    </div>
</template>