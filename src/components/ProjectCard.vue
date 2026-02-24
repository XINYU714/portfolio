<script lang="ts" setup>
import type { ProjectItem } from '@/types';

const props = defineProps<{
  item: ProjectItem
}>()

</script>

<template>
    <div class="border border-accent rounded-lg hover:bg-light/20 active:bg-primary transition-all duration-300 overflow-hidden h-full">
      <img :src="item.image" alt="" class="w-full h-60 object-cover">
      <div class="p-4">
        <h1 class="text-lg font-bold text-light line-clamp-1">{{ item.title }}</h1>
        <p class="text-sm text-muted mt-2 line-clamp-2">{{ item.description }}</p>
        <div class="flex items-center flex-wrap gap-2 mt-2">
            <p v-for="tag in item.tags" :key="tag" class="tag">{{ tag }}</p>
        </div>
      </div>
    </div>
</template>

<style scoped>

</style>