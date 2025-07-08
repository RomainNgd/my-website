import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Projects from '@/views/Projects.vue'
import Contact from '@/views/Contact.vue'
import Experience from '@/views/Experience.vue'
import About from '@/views/About.vue'
import ProjectDetails from '@/views/ProjectDetails.vue'

const routes = [
  { 
    path: '/', 
    name: 'Accueil', 
    component: Home,
    meta: { 
      title: 'Accueil | Romain Nigond',
      description: 'Bienvenue sur mon site personnel. Découvrez mes projets et contactez-moi.',
      ogImage: '/images/og-home.png'
    }
  },
  { 
    path: '/projects', 
    name: 'Mes projets', 
    component: Projects,
    meta: { 
      title: 'Projet | Romain Nigond',
      description: 'Découvrez mes projets récents et mes réalisations en développement web.',
      ogImage: '/images/og-projects.png'
    }
  },
  { 
    path: '/experience', 
    name: 'Mon expérience', 
    component: Experience,
    meta: { 
      title: 'Expérience | Romain Nigond',
      description: 'Découvrez mon expérience et mon parcours',
      ogImage: '/images/og-experience.png'
    }
  },
  { 
    path: '/about', 
    name: 'A propos', 
    component: About,
    meta: { 
      title: 'A propos | Romain Nigond',
      description: 'Apprenez-en un peu plus sur moi',
      ogImage: '/images/og-experience.png'
    }
  },
  { 
    path: '/contact', 
    name: 'Contact', 
    component: Contact,
    meta: { 
      title: 'Contact | Romain Nigond',
      description: 'Envie de me contacter ? Retrouvez ici toutes les infos pour me joindre.',
      ogImage: '/images/og-contact.png'
    }
  },
  {
    path: '/projects/:slug',
    name: 'ProjectDetails',
    component: ProjectDetails
  },
  {
    path: '/legal',
    name: 'MentionsLegales',
    component: () => import('@/views/Legal.vue'),
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// 🔥 Mise à jour automatique : title, description, OpenGraph, Twitter Cards
router.afterEach((to) => {
  const defaultTitle = 'Romain Nigond'
  const defaultDescription = 'Bienvenue sur mon site personnel.'
  const defaultOgImage = '/images/og-home.jpg'

  // Title
  document.title = to.meta.title || defaultTitle

  // Description
  updateMeta('description', to.meta.description || defaultDescription)

  // OpenGraph Tags
  updateMeta('og:title', to.meta.title || defaultTitle)
  updateMeta('og:description', to.meta.description || defaultDescription)
  updateMeta('og:image', to.meta.ogImage || defaultOgImage)
  updateMeta('og:type', 'website')

  // Twitter Cards
  updateMeta('twitter:card', 'summary_large_image')
  updateMeta('twitter:title', to.meta.title || defaultTitle)
  updateMeta('twitter:description', to.meta.description || defaultDescription)
  updateMeta('twitter:image', to.meta.ogImage || defaultOgImage)
})

function updateMeta(name, content) {
  let element = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`);
  if (element) {
    element.setAttribute('content', content);
  } else {
    element = document.createElement('meta');
    if (name.startsWith('og:')) {
      element.setAttribute('property', name);
    } else {
      element.setAttribute('name', name);
    }
    element.setAttribute('content', content);
    document.head.appendChild(element);
  }
}

export default router
