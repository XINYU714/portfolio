<template>
  <section class="container mx-auto px-5 lg:px-10 flex min-h-[70vh] w-full flex-col items-center justify-center text-center">
    <p class="mb-3 text-sm font-bold tracking-widest text-accent">404</p>
    <h1 class="mb-4 text-3xl font-bold text-light">找不到這個頁面</h1>
    <p class="mb-8 text-body text-muted">網址可能錯誤或是頁面已被移動。</p>
    <router-link to="/" class="rounded-md border border-accent px-5 py-2 font-semibold text-accent transition-colors hover:bg-accent hover:text-contrast">回首頁</router-link>
  </section>
</template>
