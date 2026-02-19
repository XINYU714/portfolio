<script lang="ts" setup>
const props = defineProps<{
  content: string;
  class?: string;
}>()
</script>
<template>
  <div class="article-subtitle">
    <h2 class="text-xl leading-relaxed font-medium" :class="class">{{ content }}</h2>
  </div>
</template>