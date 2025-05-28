  <script setup>
  import Timeline from '@/components/Timeline.vue'
  import { useHead } from '@vueuse/head'

  useHead({
    title: 'Expérience - Romain Nigond',
    meta: [
      { name: 'description', content: 'Explorer mon expérience porfessionnels au cours des dernière années' }
    ]
  })
  </script>
<template>
  <section class="bg-[#0f0f0f] min-h-screen text-white py-12 px-6">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl font-bold text-center mb-12">Mon Parcours</h1>
      <Timeline />
    </div>
  </section>
</template>

  