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
    title: "Alternance - Manager en architecture et applications logicielles des systèmes d'information (CESI / WAYBOX)",
    date: '09/2024 → 09/2026',
    location: 'Lille, France',
    description: "2 ans de master en alternance au CESI de Lille et dans l'entreprise FEELBACK WAYBOX à Villeneuve-d'Ascq. Pendant cette période, j'ai réalisé : la création d'API et d'applications web avec Symfony, la maintenance d'applications web existantes, la gestion de sites WordPress, le pilotage de projets avec les parties prenantes, ainsi que quelques missions de graphisme avec la suite Adobe."
  },
  {
    title: "Alternance - Concepteur Développeur d'Applications (CESI / WAYBOX)",
    date: '09/2023 → 09/2024',
    location: 'Lille, France',
    description: "1 an de bachelor en alternance au CESI de Lille et dans l'entreprise FEELBACK WAYBOX à Villeneuve-d'Ascq. Mes missions incluaient : la création et la maintenance d'applications web avec Symfony, la réalisation d'une plaquette de présentation commerciale avec Illustrator, et la gestion de sites WordPress."
  },
  {
    title: "Alternance - Développeur Web (CESI / WAYBOX)",
    date: '09/2021 → 09/2023',
    location: 'Lille, France',
    description: "2 ans de BTS en alternance au CESI de Lille et dans l'entreprise FEELBACK WAYBOX à Villeneuve-d'Ascq. J'ai travaillé sur : la création d'un intranet et d'un site vitrine avec WordPress, le développement d'une application web de gestion DNS en PHP natif, la création d'une application web en Symfony, et le maquettage de sites WordPress avec Adobe XD."
  },
  {
    title: "Baccalauréat - Spécialités : Maths expertes / Physique-Chimie / Sciences de l'ingénieur",
    date: '09/2018 → 07/2021',
    location: 'Lille, France',
    description: "Baccalauréat général au lycée Beaupré à Haubourdin, avec les spécialités Mathématiques, Physique-Chimie et Sciences de l'ingénieur en première, puis Maths expertes et Sciences de l'ingénieur en terminale. Obtention du BAC avec mention."
  }
])

</script>
