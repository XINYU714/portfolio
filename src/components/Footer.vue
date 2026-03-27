<script lang="ts" setup>
import { useDateFormat, useNow } from '@vueuse/core'
const year = useDateFormat(useNow(), 'YYYY')
</script>

<template>
  <footer class="py-8 px-5 text-center">
    <p class="text-body text-muted">© {{ year }} HSIN YU CHENG. All rights reserved.</p>
  </footer>
</template>