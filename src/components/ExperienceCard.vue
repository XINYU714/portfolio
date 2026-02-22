<script lang="ts" setup>
import type { ExperienceItem } from '@/types';

const props = defineProps<ExperienceItem>()
</script>
<template>
  <div class="relative pb-5 last:pb-0">
    <div>
      <h3 class="text-2xl font-bold">{{ jobTitle }}<br class="block lg:hidden"><span class="text-sm font-normal text-muted lg:pl-3">{{ date }}</span></h3>
      <div class="mt-4 space-y-4">
        <!-- 總結 -->
        <p class="text-body" v-html="description.summary"></p>
        <!-- 各個區塊 -->
        <div v-for="(section, index) in description.sections" :key="index">
          <h4 class="text-lg font-bold text-accent mb-2">{{ section.title }}</h4>
          
          <div v-for="(item, i) in section.items" :key="i" class="ml-1.5 px-3 pb-4 last:pb-0 border-l border-accent">
            <h5 class="text-body font-bold text-contrast mb-1">{{ item.title }}</h5>
            <p class="text-sm text-muted leading-relaxed" v-html="item.content"></p>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap gap-2 mt-5">
        <div v-for="(item, index) in skills" :key="index" class="tag">{{ item }}</div>
      </div>
    </div>
  </div>
</template>
