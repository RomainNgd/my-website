<template>
    <div class="relative pl-10 mb-12">
      <!-- Le point vert -->
      <div class="absolute left-[-10px] top-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>

      <div>
        <h3 class="text-xl font-bold text-white">{{ title }}</h3>
        <div class="text-sm text-green-400 mb-2">
          {{ date }} • {{ location }}
        </div>
        <p class="text-gray-300">{{ description }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    title: String,
    date: String,
    location: String,
    description: String
  })
  </script>
  