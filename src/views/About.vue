<script setup>
  import profilImg from '@/assets/images/profil.png'
  import Timeline from '@/components/Timeline.vue'
  import { useHead } from '@vueuse/head'

  useHead({
    title: 'A propos - Romain Nigond',
    meta: [
      { name: 'description', content: 'Venez en apprendre plus sur moi, mon travail et mes passions' }
    ]
  })
</script>
  
<template>
<section class="py-24 px-6 bg-[#0f172a] text-white" id="about" data-aos="fade-up">
  <div class="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">

    <!-- Image -->
    <div class="w-full md:w-1/2 flex justify-center">
      <img :src="profilImg" alt="Moi au travail" class="max-w-sm w-full rounded-xl shadow-2xl" />
    </div>

    <!-- Texte -->
    <div class="w-full md:w-1/2 text-center md:text-left">
      <h2 class="text-4xl font-extrabold mb-6">👨‍💻 À propos de moi</h2>
      <hr class="border-[#10b981] border-t-2 w-16 mb-6 mx-auto md:mx-0">

      <p class="mb-5 leading-relaxed">
        🎓 Actuellement en alternance au sein d'une PME, j’occupe un poste de développeur polyvalent, intervenant sur le backend, la gestion de projet, ainsi que sur certains aspects graphiques lorsque nécessaire.  
        Mon parcours a débuté avec une formation exclusivement orientée développement, et s’oriente aujourd’hui progressivement vers le <strong>management de projet digital</strong>.
      </p>

      <p class="mb-5 leading-relaxed">
        💡 J’ai découvert le développement au lycée, naturellement : passionné par l’univers informatique, à l’aise avec les mathématiques et animé par une forte curiosité technique. Le code est rapidement devenu une évidence.
      </p>

      <p class="mb-5 leading-relaxed">
        🔧 Ce que j’apprécie particulièrement : concevoir des <strong>API bien structurées</strong>, optimiser les performances côté backend, et m’attacher à l’<strong>expérience utilisateur</strong> plus qu’à l’esthétique seule.
      </p>

      <p class="mb-5 leading-relaxed">
        🧠 On me décrit souvent comme passionné, rigoureux et curieux — parfois exigeant — mais toujours investi avec le souci de bien faire et de faire avancer les projets.
      </p>

      <p class="mb-5 leading-relaxed">
        👥 Le travail en équipe me stimule : il favorise l’émergence d’idées nouvelles et une vision plus large. Je sais également faire preuve d’autonomie et de concentration lorsqu’un travail de fond le requiert.
      </p>

      <p class="mb-5 leading-relaxed">
        🥁 Fait marquant : je pratique les percussions depuis l’âge de 8 ans. Dix années de solfège, concerts, harmonies et cérémonies m’ont conduit à recevoir la médaille d’honneur de l’UNC (Union Nationale des Combattants) pour mon engagement musical associatif.
      </p>

      <p class="leading-relaxed italic text-[#94a3b8]">
        En résumé : que ce soit derrière un terminal ou une baguette, je m’investis pleinement dans ce que j’entreprends.
      </p>

    </div>
  </div>
</section>


</template>
