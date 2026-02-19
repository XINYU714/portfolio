<script lang="ts" setup>
import type { ArticleItem } from '@/types';

const props = defineProps<ArticleItem>()
</script>
<template>
    <figure>
        <img :src="path" :alt="alt" class="w-full h-full object-cover">
        <figcaption v-if="content" class="text-center text-sm text-accent mt-2">{{ content }}</figcaption>
    </figure>
</template>