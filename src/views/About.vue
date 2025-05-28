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
        🎓 En alternance dans une PME, je suis développeur polyvalent : backend, un peu de graphisme et gestion de projet quand il le faut.
        En formation, j’ai commencé 100% dev, aujourd’hui je m’oriente progressivement vers le <strong>management de projet digital</strong>.
      </p>

      <p class="mb-5 leading-relaxed">
        💡 J’ai découvert le développement au lycée, un peu par logique : passionné par l’univers du PC, bon en maths, curieux de comprendre comment les choses fonctionnent… C’était une évidence !
      </p>

      <p class="mb-5 leading-relaxed">
        🔧 Ce que je préfère ? Travailler sur des <strong>APIs bien pensées</strong>, optimiser la logique backend pour gagner en performance, et réfléchir à l’<strong>expérience utilisateur</strong> plus qu’au design pur.
      </p>

      <p class="mb-5 leading-relaxed">
        🧠 On dit de moi que je suis passionné, curieux, rigoureux — parfois (souvent) exigeant — mais toujours avec la volonté de bien faire et de faire avancer les projets.
      </p>

      <p class="mb-5 leading-relaxed">
        👥 J’adore bosser en équipe : ça booste les idées et ouvre des perspectives. Mais je sais aussi me concentrer à fond dans ma bulle quand la technique le demande.
      </p>

      <p class="mb-5 leading-relaxed">
        🥁 Fun fact : je joue des percussions depuis l’âge de 8 ans. 10 ans de solfège, concerts, harmonies, commémorations… Jusqu’à recevoir la médaille d’honneur de l’UNC ( Union Nationnal des Combatant) pour mon engagement musical associatif.
      </p>

      <p class="leading-relaxed italic text-[#94a3b8]">
        En bref : que ce soit en ligne de commande ou à la baguette, je donne toujours le meilleur de moi-même.
      </p>
    </div>
  </div>
</section>


</template>
