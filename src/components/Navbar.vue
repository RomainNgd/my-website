<template class="">
  <nav class="bg-[#065f46] text-white py-4 relative flex items-center justify-between px-4 z-999">
    <!-- BurgerMenu visible uniquement en mobile -->
    <button @click="toggleMenu" class="md:hidden">
      <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none"
           viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"/>
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none"
           viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M6 18L18 6M6 6l12 12"/>
      </svg>
    </button>

    <!-- Menu classique -->
    <ul
      :class="[
        'text-lg font-semibold gap-12',
        isOpen ? 'flex flex-col absolute top-16 left-0 w-full bg-[#065f46] py-4 space-y-4 text-center md:static md:flex md:flex-row md:space-y-0' : 'hidden md:flex md:flex-row'
      ]"
    >
      <li><RouterLink to="/" class="hover:underline" @click="closeMenu">Accueil</RouterLink></li>
      <li><RouterLink to="/projects" class="hover:underline" @click="closeMenu">Projets</RouterLink></li>
      <li><RouterLink to="/experience" class="hover:underline" @click="closeMenu">Parcours</RouterLink></li>
      <li><RouterLink to="/contact" class="hover:underline" @click="closeMenu">Contact</RouterLink></li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isOpen = ref(false)

function toggleMenu() {
  isOpen.value = !isOpen.value
}

function closeMenu() {
  isOpen.value = false
}
</script>

<style scoped>
/* Tu peux améliorer avec transition CSS si tu veux */
</style>
