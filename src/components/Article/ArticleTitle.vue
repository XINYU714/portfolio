<script lang="ts" setup>
const props = defineProps<{
  content: string;
}>()
</script>
<template>
  <h2 class="article-title text-3xl leading-relaxed font-bold not-first:pt-5 scroll-mt-20">{{ content }}</h2>
</template>