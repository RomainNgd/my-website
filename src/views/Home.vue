<script setup>
  import profilImg from '@/assets/images/profil.png'
  import computerRoom from '@/assets/images/computer.jpg'
  import skills from '@/assets/images/skills.jpg'
  import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="bg-[#0f0f0f] text-white">
    <!-- Hero -->
    <section class="text-center py-24 px-7" data-aos="fade-up">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">Romain Nigond</h1>
      <p class="text-xl text-gray-300 mb-8">Ingénieur Développement passionné par le web, l’innovation et les technologies modernes.</p>
      <div class="flex justify-center gap-6">
        <a href="https://github.com/RomainNgd" target="_blank" class="bg-white text-[#065f46] font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition">Mon GitHub</a>
        <RouterLink to="/contact" class="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-[#065f46] transition">Me contacter</RouterLink>
      </div>
    </section>

    <!-- Compétences Tech -->
    <section class="py-20 px-6 bg-[#0f172a]" data-aos="fade-up">
      <div class="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center">
        <!-- Image -->
        <div class="w-full md:w-1/2 flex justify-center">
          <img
            :src="computerRoom"
            alt="dev"
            class="max-w-sm w-full rounded-lg shadow-lg"
          />
        </div>

        <!-- Compétences -->
        <div class="w-full md:w-1/2 text-center md:text-left">
          <h2 class="text-3xl font-bold mb-8">Compétences Tehcniques</h2>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 justify-items-left">
            <span class="bg-[#065f46] text-white px-4 py-2 rounded-full">Symfony</span>
            <span class="bg-[#065f46] text-white px-4 py-2 rounded-full">Vue.js</span>
            <span class="bg-[#065f46] text-white px-4 py-2 rounded-full">Docker</span>
            <span class="bg-[#065f46] text-white px-4 py-2 rounded-full">Laravel</span>
            <span class="bg-[#065f46] text-white px-4 py-2 rounded-full">Spring Boot</span>
            <span class="bg-[#065f46] text-white px-4 py-2 rounded-full">React Native</span>
            <span class="bg-[#065f46] text-white px-4 py-2 rounded-full">Flutter</span>
            <span class="bg-[#065f46] text-white px-4 py-2 rounded-full">Twitter Bootstrap</span>
          </div>
        </div>
      </div>
    </section>

        <!--Autres Compétences -->
    <section class="py-20 px-6 bg-[#0f172a]" data-aos="fade-up">
      <div class="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center">

        <!-- Compétences -->
        <div class="w-full md:w-1/2 text-center md:text-left">
          <h2 class="text-3xl font-bold mb-8">Compétences supplémentaires</h2>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 justify-items-left">
            <span class="bg-[#065f46] text-white px-4 py-2 rounded-full">Photoshop</span>
            <span class="bg-[#065f46] text-white px-4 py-2 rounded-full">Illustrator</span>
            <span class="bg-[#065f46] text-white px-4 py-2 rounded-full">Gestion de projet Agile</span>
            <span class="bg-[#065f46] text-white px-4 py-2 rounded-full">Animation de réunion</span>
            <span class="bg-[#065f46] text-white px-4 py-2 rounded-full">Canva</span>
          </div>
        </div>

        <!-- Image -->
        <div class="w-full md:w-1/2 flex justify-center">
          <img
            :src="skills"
            alt="dev"
            class="max-w-sm w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>


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
            <li><strong>📍 Localisation :</strong> Lyon, France</li>
            <li><strong>🎓 Formation :</strong> Bac+5 en conception et développement</li>
            <li><strong>🧠 Centres d'intérêt :</strong> UI/UX, architecture logicielle, IA générative</li>
          </ul>
        </div>
        <span class="text-center">Photo généré par IA</span>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-[#111827] text-gray-400 py-10 text-sm">
      <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 px-6 text-center md:text-left">
        <p>&copy; 2025 Romain Nigond. Tous droits réservés.</p>
        <div class="flex gap-4">
          <RouterLink to="/" class="hover:underline">Accueil</RouterLink>
          <RouterLink to="/projects" class="hover:underline">Projets</RouterLink>
          <RouterLink to="/contact" class="hover:underline">Contact</RouterLink>
          <RouterLink to="/legal" class="hover:underline">Mentions légales</RouterLink>
        </div>
      </div>
    </footer>
  </div>
</template>