<script lang="ts" setup>
import type { ArticleLinkItem } from '@/types';

defineProps<ArticleLinkItem>() 
</script>

<template>
	<div class="my-5 text-xl text-light font-medium hover:text-contrast transition-colors leading-relaxed">
		<a :href="path" target="_blank">{{ content }}</a>
	</div>
</template>