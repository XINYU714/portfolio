<script lang="ts" setup>
import type { ArticleTitleItem } from '@/types';
const props = defineProps<ArticleTitleItem>()
</script>
<template>
  <h2 class="article-title text-3xl leading-relaxed font-bold not-first:pt-5 scroll-mt-20">{{ content }}</h2>
</template>