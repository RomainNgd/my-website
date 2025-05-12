<template>
  <div class="relative border-l-4 border-green-500 ml-8">
    <TimelineItem
      v-for="(item, index) in experiences"
      :key="index"
      :title="item.title"
      :date="item.date"
      :location="item.location"
      :description="item.description"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TimelineItem from '@/components/TimelineItem.vue'

const experiences = ref([
  {
    title: 'Alternance - Manager en architecture et applications logicielles des systèmes d\'information (CESI / WAYBOX)',
    date: '09/2024 → 09/2026',
    location: 'Lille, France',
    description: '2 ans de master en altenrnace au CESI de LILLE et dans la société FEELBACK WAYBOX à villeneuve d\'Ascq. Durant 2 ans mes tâches ont compris : la création d\'API et d\'application WEB avec symfony, la miantenace d\'Application WEB existante, la maintenance de site wordpress, le pilotage de projet avec paties prenantes ainsi que des petite mission de graphisme avec la suite Adobe'
  },
  {
    title: 'Alternance - Concepteur Developpeur d\'Application (CESI / WAYBOX)',
    date: '09/2023 → 09/2024',
    location: 'Lille, France',
    description: '1 ans de bachelor en altenrnace au CESI de LILLE et dans la société FEELBACK WAYBOX à villeneuve d\'Ascq. Durant cette année mes mission ont compris : la création et la maintenace d\'application web sur symfony, création d\'une plaquette de présentation commercial avec Illustrator, maintenace de site Wordpress'
  },
  {
    title: 'Alternance - Dévellopeur Web (CESI / WAYBOX)',
    date: '09/2021 → 09/2023',
    location: 'Lille, France',
    description: '2 ans de BTS en altenrnace au CESI de LILLE et dans la société FEELBACK WAYBOX à villeneuve d\'Ascq.Durant ces 2 ans mes missions on compris : la création d\'un intranet et \'un site vitrine avec wordpress, la création d\'une application web de gestion de DNS en PHP vanilla, ma création d\'une application web en Symfony, le maquetage des site wordpress sur Adobe XD.'
  },
  {
    title: 'Baccalauréat - Spécialité : Maths Expert / Physique-Chimie / Science de l\'ingénieure',
    date: '09/2018 → 07/2021',
    location: 'Lille, France',
    description: 'Baccalauréat général au Lycée Beauprès a Haubourdin, avec spécialité mathématique, Physique-Chimie, Science de l\'ingénieure en première puis, Maths Expert et Science de l\'ingénieure en terminal. Obtention du BAC avec mention.'
  }
])
</script>
