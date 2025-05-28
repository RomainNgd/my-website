<script setup>
defineProps({
  title: String,
  description: {
    type: String,
    default: "Ingénieur Développement passionné par le web, l'innovation et les technologies modernes."
  }
})
</script>

<template>
    <section class="text-center py-24 px-7" data-aos="fade-up">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ title }}</h1>
        <p class="text-xl text-gray-300 mb-8">{{ description }}</p>
        <div class="flex justify-center gap-6">
        <a href="https://github.com/RomainNgd" target="_blank" class="bg-white text-[#065f46] font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition">Mon GitHub</a>
        <RouterLink to="/contact" class="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-[#065f46] transition">Me contacter</RouterLink>
        </div>
    </section>
</template>
