<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useHead } from '@vueuse/head'

// Données projets
import { projects } from '@/data/projects.js'

const route = useRoute()
const slug = route.params.slug

const project = computed(() => projects.find(p => p.slug === slug))

useHead({
  title: project.value?.title || 'Projet',
})
</script>

<template>
  <div class="bg-[#0f0f0f] text-white min-h-screen py-20 px-6">
    <div v-if="project" class="max-w-4xl mx-auto">
      <img
        :src="project.image"
        :alt="project.title"
        class="w-full max-w-md mx-auto rounded-lg mb-8 shadow-xl"
      />
      <h1 class="text-4xl font-bold mb-4">{{ project.title }}</h1>
      <p class="text-gray-400 mb-6 text-sm italic">Contexte : {{ project.context }}</p>
      <div class="mb-4">
        <h2 class="text-xl font-semibold mb-2">Technologies utilisées :</h2>
        <div class="flex flex-wrap gap-2">
          <span v-for="tech in project.techs" :key="tech" class="text-xs bg-[#065f46] text-white px-2 py-1 rounded">
            {{ tech }}
          </span>
        </div>
      </div>

      <p v-for="sentence in project.fullDescription" class="text-lg leading-relaxed mb-6">
        {{ sentence }}
        <br>
      </p>
    </div>

    <div v-else class="text-center text-gray-400">
      <p>Projet non trouvé.</p>
    </div>
  </div>
</template>
