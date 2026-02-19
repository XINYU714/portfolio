<script lang="ts" setup>
const props = defineProps<{
  content: string;
}>()
</script>

<template>
    <div class="my-5 [.article-subtitle+&]:mt-1">
      <div class="text-body" v-html="content"></div>
    </div>
</template>