<template>
  <section class="mx-auto flex min-h-[70vh] w-full max-w-4xl flex-col items-center justify-center px-6 text-center">
    <p class="mb-3 text-sm font-semibold tracking-widest text-accent">404</p>
    <h1 class="mb-4 text-3xl font-bold text-light">找不到這個頁面</h1>
    <p class="mb-8 text-body text-muted">網址可能錯誤，或頁面已被移動。</p>
    <RouterLink
      to="/"
      class="rounded-md border border-accent px-5 py-2 font-semibold text-accent transition-colors hover:bg-accent hover:text-contrast"
    >
      回首頁
    </RouterLink>
  </section>
</template>
