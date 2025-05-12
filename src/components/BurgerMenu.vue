<!-- src/components/BurgerMenu.vue -->
<template>
    <div class="md:hidden"> <!-- CACHÉ sur les écrans moyens et grands -->
      <button @click="toggleMenu" class="p-2">
        <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
             viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
             viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
  
      <div v-if="isOpen" class="absolute top-14 right-4 bg-white shadow-lg rounded p-4 space-y-4">
        <a href="#accueil" @click="toggleMenu" class="block">Accueil</a>
        <a href="#experience" @click="toggleMenu" class="block">Parcours</a>
        <a href="#projets" @click="toggleMenu" class="block">Projets</a>
        <a href="#contact" @click="toggleMenu" class="block">Contact</a>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const isOpen = ref(false)
  
  function toggleMenu() {
    isOpen.value = !isOpen.value
  }
  </script>
  
  <style scoped>
  /* Tu peux ajouter ici des animations si tu veux */
  </style>
  