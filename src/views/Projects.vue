<script>
  import { RouterLink } from 'vue-router'
  import { useHead } from '@vueuse/head'

  useHead({
    title: 'Mes projets - Romain Nigond',
    meta: [
      { name: 'description', content: 'Découvrez les projets que j’ai réalisés en Vue.js, Symfony, Flutter, ReactNative, Wordpress etc.' }
    ]
  })
</script>
<template>
    <div class="bg-[#0f0f0f] min-h-screen text-white">
      <!-- Titre -->
      <section class="py-16 text-center px-4">
        <h1 class="text-4xl font-bold mb-4">Mes projets</h1>
        <p class="text-gray-400 max-w-2xl mx-auto">Voici quelques projets que j’ai réalisés avec passion. Chaque projet est une nouvelle occasion d’apprendre et de créer.</p>
      </section>
  
      <!-- Liste des projets -->
      <section class="max-w-6xl mx-auto grid gap-10 px-6 pb-20 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          v-for="project in projects"
          :key="project.title"
          v-bind="project"
        />
      </section>
    </div>
  </template>
  
  <script setup>
  import ProjectCard from '@/components/ProjectCard.vue'
  import { projects } from '@/data/projects'
  </script>
  