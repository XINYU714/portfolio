<script lang="ts" setup>
import type { ProjectItem } from '@/types';

const props = defineProps<{
  item: ProjectItem
}>()

</script>

<template>
    <div class="border border-accent rounded-lg hover:bg-light/20 active:bg-primary transition-all duration-300 overflow-hidden">
      <img :src="item.image" alt="" class="w-full h-56 object-cover">
      <div class="p-4">
        <h1 class="text-lg font-bold text-light">{{ item.title }}</h1>
        <p class="text-sm text-gray-400 mt-2">{{ item.description }}</p>
        <div class="flex items-center gap-2 mt-2">
            <p v-for="tag in item.tags" :key="tag" class="rounded-full bg-primary text-light text-sm px-2 py-1">{{ tag }}</p>
        </div>
      </div>
    </div>
</template>

<style scoped>

</style>