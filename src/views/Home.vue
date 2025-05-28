<script setup>
  import profilImg from '@/assets/images/profil.png'
  import SkillsList from '@/components/SkillsList.vue'
  import Hero from '@/components/Hero.vue'
  import computerRoom from '@/assets/images/computer.jpg'
  import skills from '@/assets/images/skills.webp'
  import { RouterLink } from 'vue-router'
  import { useHead } from '@vueuse/head'
  useHead({
    title: 'Romain Nigond - Développeur web/mobile',
    meta: [
      {
        name: 'description',
        content: 'Portfolio de Romain Nigond, développeur web/mobile.'
      },
      {
        name: 'robots',
        content: 'index, follow'
      }
    ]
  })
  const techSkills = [
    'Symfony', 'Vue.js', 'Docker', 'Laravel',
    'Spring Boot', 'React Native', 'Flutter', 'Twitter Bootstrap', 'K8s'
  ]

  const softSkills = [
    'Photoshop', 'Illustrator', 'Gestion de projet',
    'Agilité (SCRUM)', 'Canva', 'Jira', 
  ]
</script>

<template>
  <div class="bg-[#0f0f0f] text-white">
    <!-- Hero -->
     <Hero title="Romain Nigond"/>
    <!-- Bloc compétences tech -->
    <SkillsList :title="'Compétences Techniques'" :skills="techSkills">
      <template #image>
        <div class="w-full md:w-1/2 flex justify-center">
          <img :src="computerRoom" alt="dev" class="max-w-sm w-full rounded-lg shadow-lg" />
        </div>
      </template>
    </SkillsList>

    <!-- Bloc compétences autres -->
    <SkillsList :title="'Compétences supplémentaires'" :skills="softSkills" :imageRight="true">
      <template #image>
        <div class="w-full md:w-1/2 flex justify-center">
          <img :src="skills" alt="dev" class="max-w-sm w-full rounded-lg shadow-lg" />
        </div>
      </template>
    </SkillsList>


    <!-- À propos (layout 2 colonnes) -->
    <section class="py-20 px-6 bg-[#0f172a]" data-aos="fade-up">
      <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <!-- Image -->
        <div>
          <img
            :src="profilImg"
            alt="illustration développeur"
            class="w-full max-w-md mx-auto rounded-xl shadow-lg"
          />
        </div>
        <!-- Infos perso -->
        <div>
          <h2 class="text-3xl font-bold mb-4">Un peu plus sur moi</h2>
          <p class="text-gray-400 text-lg mb-6">
            Je suis passionné par la tech, l'expérience utilisateur et les projets qui ont du sens.  
            J’adore apprendre, optimiser, et transformer des idées en solutions concrètes.
          </p>
          <ul class="text-gray-300 space-y-2 text-sm">
            <li><strong>📍 Localisation :</strong> Lille, France</li>
            <li><strong>🎓 Formation :</strong> Bac+5 en conception et développement</li>
            <li><strong>🧠 Centres d'intérêt :</strong> UI/UX, architecture logicielle, IA générative</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>