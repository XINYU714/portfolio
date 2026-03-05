<script lang="ts" setup>
import type { ArticleQuoteItem } from '@/types';

defineProps<ArticleQuoteItem>()
</script>

<template>
  <div class="my-5 bg-accent/25 p-5 rounded-lg">
    <div class="text-body" v-html="content"></div>
  </div>
</template>