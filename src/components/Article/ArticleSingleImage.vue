<script lang="ts" setup>
import { useImage } from '@vueuse/core'
import type { ArticleImageItem } from '@/types'

const props = defineProps<ArticleImageItem>()
const { isLoading } = useImage({ src: props.path })
</script>
<template>
	<figure class="my-5">
		<div v-if="isLoading" class="w-full h-60 rounded-lg bg-secondary animate-pulse"></div>
		<img v-else :src="path" :alt="alt" class="w-full h-full object-cover rounded-lg">
		<figcaption v-show="content" class="text-center text-sm text-muted mt-2">{{ content }}</figcaption>
	</figure>
</template>
