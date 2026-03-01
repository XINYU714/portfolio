<script lang="ts" setup>
import type { ArticleContentItem } from '@/types';
const props = defineProps<ArticleContentItem>()
</script>

<template>
    <div class="my-5 [.article-subtitle+&]:mt-1">
      <div class="text-body" v-html="content"></div>
    </div>
</template>