<script setup>
  import { useHead } from '@vueuse/head'

  useHead({
    title: 'Contact - Romain Nigond',
    meta: [
      { name: 'description', content: 'Contactez-moi pour discuter d’un projet web ou d’une collaboration.' }
    ]
  })
</script>
<template>
    <div class="bg-[#0f0f0f] min-h-screen text-white">
      <!-- Section Contact -->
      <section class="flex flex-col items-center justify-center py-20 px-6 text-center" data-aos="fade-up">
        <h1 class="text-4xl font-bold mb-6">Me contacter</h1>
        <p class="text-gray-400 max-w-xl mb-10">
          Pour toute demande d'information, collaboration ou simplement discuter de projets passionnants, n'hésite pas à me contacter !
        </p>
  
        <div class="space-y-6 text-lg">
          <div>
            📞 <span class="font-semibold">+33 7 81 49 69 49</span>
          </div>
        <div>
            ✉️ <span class="font-semibold">romain.nigond@gmail.com</span>
        </div>
        <div>
            💻 <a href="https://github.com/RomainNgd" target="_blank" class="text-[#4ade80] hover:underline">Mon GitHub</a>
        </div>
                <!-- Bouton de téléchargement -->
        <a target="_blank" href="/cv.pdf"downloadclass="inline-block bg-[#065f46] hover:bg-[#047857] text-white font-semibold px-8 py-4 rounded-full transition">Télécharger mon CV 📄</a>
        </div>
      </section>
    </div>
  </template>
  