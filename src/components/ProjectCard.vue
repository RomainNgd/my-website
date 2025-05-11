<template>
    <div
      class="bg-[#111827] rounded-lg shadow-lg overflow-hidden hover:scale-[1.02] transition transform duration-300"
      data-aos="fade-up"
    >
      <img :src="image" :alt="title" class="w-full h-48 object-cover" />
      <div class="p-6">
      <span class="inline-block mb-2 px-3 py-1 text-xs font-semibold bg-[#065f46] text-white rounded-full">
        {{ context }}
      </span>
        <h3 class="text-2xl font-bold mb-2">{{ title }}</h3>
        <p class="text-gray-300 text-sm mb-4">{{ description }}</p>
        <div class="flex flex-wrap gap-2 mb-4">
          <span v-for="tech in techs" :key="tech" class="text-xs bg-[#065f46] text-white px-2 py-1 rounded">
            {{ tech }}
          </span>
        </div>
        <a :href="link" target="_blank" class="text-sm text-[#4ade80] hover:underline">Voir le projet →</a>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    title: String,
    description: String,
    image: String,
    techs: Array,
    link: String,
    context: String 
  })
  </script>
  