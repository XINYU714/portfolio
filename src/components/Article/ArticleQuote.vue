<script lang="ts" setup>
const props = defineProps<{
  content: string;
}>()
</script>

<template>
  <div class="my-5 bg-accent/25 p-5 rounded-lg">
    <div class="text-body" v-html="content"></div>
  </div>
</template>