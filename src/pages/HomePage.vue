<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue';
import ExperienceCard from '@/components/ExperienceCard.vue';
import { PROJECT_LIST } from '@/constants/project';
import { EXPERIENCE_List } from '@/constants/experience';
</script>

<template>
  <div class="container mx-auto px-5 lg:px-10">
    <section class="py-10">
      <div>
          <div class="py-10">
              <h1 class="text-6xl font-bold uppercase">Hi, I'm 
                <span class="switch-text">Stacy</span>.</h1>  
              <!-- a Frontend Developer  -->
            </div>
            <div class="flex items-center gap-5">
          </div>
          <div>
            <p>擁有 3 年以上經驗的前端工程師。</p>
            <p>專精於<span class="font-bold text-accent"> Vue 生態系(Pinia、Vuex、Vue Router、Vuetify)</span>，擅長將複雜業務需求轉化為高效、具擴展性的 Web 應用並提升團隊開發效率與使用者體驗。</p>
            <p>目前正積極將開發技術棧延伸至 React 與 TypeScript，追求更嚴謹的型別安全與元件設計模式。</p>
          </div>
      </div>
    </section>
    <!-- 經驗區 -->
    <section>
      <h2 class="text-xl font-bold text-light mb-5">工作經歷 | Experience</h2>
      <div class="relative">
        <ExperienceCard v-for="item in EXPERIENCE_List" :key="item.id" v-bind="item" />
      </div>
        
    </section>
    <!-- 專案區 -->
    <section class="my-10">
      <h2 class="text-xl font-bold text-light mb-5">專案分享 | Projects</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <router-link v-for="item in PROJECT_LIST" :key="item.id" :to="`/project/${item.id}`">
              <ProjectCard :item="item" />
          </router-link>
      </div>
    </section>
  </div>
</template>
