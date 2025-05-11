<template>
    <nav class="bg-[#065f46] text-white py-4">
      <ul class="flex justify-center gap-12 text-lg font-semibold">
        <li><RouterLink to="/" class="hover:underline">Accueil</RouterLink></li>
        <li><RouterLink to="/projects" class="hover:underline">Projets</RouterLink></li>
        <li><RouterLink to="/contact" class="hover:underline">Contact</RouterLink></li>
      </ul>
    </nav>
  </template>
  
  <script setup>
  import { RouterLink } from 'vue-router'
  </script>
  
  <style scoped>
  /* Tu peux customiser ici si tu veux plus tard */
  </style>
  