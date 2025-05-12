<template>
  <div class="relative border-l-4 border-green-500 ml-8">
    <TimelineItem
      v-for="(item, index) in experiences"
      :key="index"
      :title="item.title"
      :date="item.date"
      :location="item.location"
      :description="item.description"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TimelineItem from '@/components/TimelineItem.vue'

const experiences = ref([
  {
    title: 'Développeur Frontend - Freelance',
    date: '09/2025 → 09/2026',
    location: 'Paris, France',
    description: 'Création de sites vitrines modernes et responsives pour plusieurs clients.'
  },
  {
    title: 'Stage Fullstack Developer',
    date: '02/2024 → 08/2024',
    location: 'Lyon, France',
    description: 'Participation à la refonte d\'une application interne en Vue.js et Symfony.'
  },
  {
    title: 'Étudiant Développeur Web',
    date: '09/2022 → 06/2024',
    location: 'Nice, France',
    description: 'Formation intensive en développement web et mobile.'
  }
])
</script>
