<script lang="ts" setup>
import type { ArticleImageItem } from '@/types'

defineProps<ArticleImageItem>()
</script>
<template>
    <figure class="my-5">
        <img :src="path" :alt="alt" class="w-full h-full object-cover">
        <figcaption v-if="content" class="text-center text-sm text-muted mt-2">{{ content }}</figcaption>
    </figure>
</template>
