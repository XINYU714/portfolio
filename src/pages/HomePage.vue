<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue';
import ExperienceCard from '@/components/ExperienceCard.vue';
import { PROJECT_LIST } from '@/constants/project';
import { EXPERIENCE_List } from '@/constants/experience';
import { PROFILE } from '@/constants/profile';
import githubIcon from '@/assets/img/github.svg';
import emailIcon from '@/assets/img/email.svg';

const contactLinks = [
  { label: 'Email', href: PROFILE.email ? `mailto:${PROFILE.email}` : '', icon: emailIcon },
  { label: 'GitHub', href: PROFILE.github, icon: githubIcon },
];
</script>

<template>
  <section class="bg-primary">
    <div class="main-container py-20">
      <div class="py-10">
          <h1 class="text-4xl lg:text-6xl font-bold uppercase">Hi, I'm Stacy.</h1>  
          <p class="text-xl text-accent">Frontend Developer</p>
        </div>
        <div class="text-body lg:max-w-1/2 pb-5">
          <p>擁有 3 年以上經驗的前端工程師。</p>
          <p>專精於<span class="font-bold text-accent"> Vue 生態系（Pinia、Vuex、Vue Router、Vuetify）</span>，擅長將複雜業務需求轉化為高效、具擴展性的 Web 應用並提升團隊開發效率與重視使用者體驗。<br class="hidden lg:block">目前正積極將開發技術棧延伸至 React 與 TypeScript，追求更嚴謹的型別安全與元件設計模式。</p>
        </div>
        <div class="flex flex-wrap items-center gap-3">
          <a
            v-for="item in contactLinks"
            :key="item.label"
            :href="item.href"
            target="_blank" 
            rel="noopener noreferrer"
            class="hover:brightness-75 transition-all duration-300"
          >
            <img :src="item.icon" :alt="item.label" width="24" height="24" class="fill-current">
          </a>
        </div>
    </div>
  </section>
  <!-- 經驗區 -->
  <section class="main-container py-10 lg:py-20">
    <h2 class="text-xl font-bold text-light mb-5">工作經歷 | Experience</h2>
    <ExperienceCard v-for="item in EXPERIENCE_List" :key="item.id" v-bind="item" />
  </section>
  <!-- 專案區 -->
  <section class="main-container py-10">
    <h2 class="text-xl font-bold text-light mb-5">專案分享 | Projects</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <router-link v-for="item in PROJECT_LIST" :key="item.id" :to="`/project/${item.id}`">
          <ProjectCard :item="item" />
        </router-link>
    </div>
  </section>
</template>
