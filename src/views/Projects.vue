<script>
  import appSocial from '@/assets/images/app-social.jpg'
  import gestion from '@/assets/images/gestion.webp'
  import support from '@/assets/images/support.jpg'
  import site from '@/assets/images/site.jpg'
  import intranet from '@/assets/images/intranet.jpg'
  import livraison from '@/assets/images/livraison.webp'
  import { RouterLink } from 'vue-router'
  import { useHead } from '@vueuse/head'

  useHead({
    title: 'Mes projets - Romain Nigond',
    meta: [
      { name: 'description', content: 'Découvrez les projets que j’ai réalisés en Vue.js, Symfony, Flutter, ReactNative, Wordpress etc.' }
    ]
  })
</script>
<template>
    <div class="bg-[#0f0f0f] min-h-screen text-white">
      <!-- Titre -->
      <section class="py-16 text-center px-4">
        <h1 class="text-4xl font-bold mb-4">Mes projets</h1>
        <p class="text-gray-400 max-w-2xl mx-auto">Voici quelques projets que j’ai réalisés avec passion. Chaque projet est une nouvelle occasion d’apprendre et de créer.</p>
      </section>
  
      <!-- Liste des projets -->
      <section class="max-w-6xl mx-auto grid gap-10 px-6 pb-20 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          v-for="project in projects"
          :key="project.title"
          v-bind="project"
        />
      </section>
    </div>
  </template>
  
  <script setup>
  import ProjectCard from '@/components/ProjectCard.vue'
  
  const projects = [
    {
      title: 'App Web de gestion administrative',
      description: 'Une application web pour gérer les clients, les contrats, les facturation, le suivi des chiffres, etc',
      image: livraison,
      techs: ['Symfony', 'MySql', 'VueJs', 'Docker'],
      link: '#',
      context: 'Entreprise'
    },
    {
      title: 'App web de support',
      description: 'Maintenance et ajout de foncitonnalité sur une application web de support technique (système de ticketing)',
      image: support,
      techs: ['Symfony', 'VueJs', 'MariaDb', 'Docker'],
      link: '#',
      context: "Entreprise"
    },
    {
      title: 'Site vitrine',
      description: 'Un site vitrine simple pour présenter une entreprise',
      image: site,
      techs: ['Wordpress'],
      link: '#',
      context: 'Entreprise'
    },
    {
      title: 'Intranet',
      description: 'Un Intranet regroupant toute les ressources disponnible pour les salarié pour le bon déroulement de leurs tâches',
      image: intranet,
      techs: ['Wordpress'],
      link: '#',
      context: 'Entreprise'
    },
    {
      title: 'App mobile blog/réseau Social',
      description: 'Une application Mobile type blog/réseau social pour mettre en relation les citoyens français',
      image: appSocial,
      techs: ['Symfony', 'Flutter', 'MariaDb', 'Docker'],
      link: '#',
      context: "Formation"
    },
    {
      title: 'App mobile de livraison',
      description: 'Une app mobile type UberEats développée en React Native, connectée à une API Spring Boot.',
      image: livraison,
      techs: ['React Native', 'Spring Boot', 'MongoDB', 'PostGres', 'Docker', 'K8s'],
      link: '#',
      context: "Formation"
    },
    { 
      title: 'To do List Interractive',
      description: 'Une application de To Do List partagé entre utilisateurs',
      image: livraison,
      techs: ['Symfont', 'Javascript', 'MySql'],
      link: '#',
      context: "Formation"
    },
  ]
  </script>
  