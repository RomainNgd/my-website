<script setup>
defineProps({
  title: String,
  skills: Array,
  imageRight: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <section class="py-20 px-6 bg-[#0f172a]" data-aos="fade-up">
    <div
      class="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center"
      :class="{ 'md:flex-row-reverse': imageRight }"
    >
      <slot name="image" />

      <div class="w-full md:w-1/2 text-center md:text-left">
        <h2 class="text-3xl font-bold mb-8">{{ title }}</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 justify-items-left">
          <span
            v-for="skill in skills"
            :key="skill"
            class="bg-[#065f46] text-white px-4 py-2 rounded-full"
          >
            {{ skill }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
