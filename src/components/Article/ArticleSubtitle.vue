<script lang="ts" setup>
import type { ArticleSubtitleItem } from '@/types';
const props = defineProps<ArticleSubtitleItem>()
</script>
<template>
  <div class="article-subtitle">
    <h2 class="text-xl leading-relaxed font-medium" :class="class">{{ content }}</h2>
  </div>
</template>