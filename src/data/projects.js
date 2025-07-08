import appSocial from '@/assets/images/app-social.jpg'  
import gestion from '@/assets/images/gestion.webp'
import support from '@/assets/images/support.jpg'
import site from '@/assets/images/site.jpg'
import intranet from '@/assets/images/intranet.jpg'
import livraison from '@/assets/images/livraison.webp'
import todo from '@/assets/images/to-do.png'
export const projects = [
    {
      title: 'App Web de gestion administrative',
      description: 'Une application web pour gérer les clients, les contrats, la facturation, le suivi des chiffres, etc',
      image: gestion,
      techs: ['Symfony', 'MySql', 'VueJs', 'Docker'],
      link: '#',
      context: 'Entreprise',
      slug: 'gestion',
      fullDescription: [    
            "Ce projet a consisté à refondre une application interne de gestion administrative datant de 2009, en la modernisant avec Symfony, Vue.js et Docker. L’objectif était d’améliorer la gestion des clients, des contrats, de la facturation PDF, du stock et du matériel, tout en ajoutant progressivement de nouvelles fonctionnalités métier.",
            "Parmi les évolutions majeures : affichage des clients sur une carte via leur adresse, génération d’exports CSV personnalisés (avec filtres et gestion fine des droits d’accès), suivi des objectifs commerciaux avec tableaux de bord et KPIs.",
            "Développé en autonomie avec le soutien de mon tuteur, ce projet s’est étalé sur 6 à 8 mois pour la version initiale (V1), suivis de 2 années de maintenance évolutive. Le plus gros défi technique fut la conception d’un moteur d’export de données souple pour les utilisateurs et administrateurs, ce qui m’a poussé à approfondir sérieusement le SQL.",
            "Ce projet a été une étape fondatrice dans ma maîtrise de Symfony, et a été très bien accueilli par les équipes, car il a permis une vraie évolution des processus administratifs."
        ]
    },
    {
      title: 'App web de support',
      description: 'Maintenance et ajout de fonctionnalités sur une application web de support technique (système de ticketing)',
      image: support,
      techs: ['Symfony', 'VueJs', 'MariaDb', 'Docker'],
      link: '#',
      context: "Entreprise",
      slug: 'support',
      fullDescription: [
            "Il s’agissait ici de maintenir et de faire évoluer une application de support technique déjà en production. L’un des principaux enjeux consistait à améliorer l’interopérabilité avec d’autres systèmes internes, notamment l’application de gestion administrative, pour automatiser la récupération d’informations clients.",
            "J’ai aussi participé à la migration progressive vers des technologies plus récentes, tout en maintenant la stabilité de l’existant. L’organisation se faisait via GitLab, avec des tickets validés par le DTO (Directeur Technique des Opérations) puis affectés à l’équipe.",
            "Ce projet m’a appris à intervenir dans une application métier complexe, avec une grande rigueur dans la gestion du code et des demandes."
        ]
    },
    {
      title: 'Site vitrine',
      description: 'Un site vitrine simple pour présenter une entreprise',
      image: site,
      techs: ['Wordpress'],
      link: '#',
      context: 'Entreprise',
      slug: 'vitrine',
      fullDescription: [
            "Premier projet professionnel développé en autonomie, ce site vitrine a été conçu pour l’entreprise de mon alternance. L’objectif : remplacer un ancien site datant de 2009, créé par un prestataire externe, par une solution moderne et maintenable en interne.",
            "J’ai utilisé le thème WordPress Astra pour démarrer rapidement tout en conservant la possibilité de personnalisation. Le développement s’est étalé sur près d’un an, entre autres à cause de délais de validation, mais aussi car c’était mon tout premier \"vrai\" projet.",
            "Ce projet m’a permis d’apprendre à échanger avec un client (ici, le dirigeant de l’entreprise) et à gérer un projet sur la durée, en parallèle d’autres missions. Le site est aujourd’hui en ligne : waybox.fr."
        ]
    },
    {
      title: 'Intranet',
      description: 'Un Intranet regroupant toutes les ressources disponnibles pour les salariés pour faciliter leur travail au quotidien',
      image: intranet,
      techs: ['Wordpress'],
      link: '#',
      context: 'Entreprise',
      slug: 'intranet',
      fullDescription: [
            "Créé dans le cadre de mon arrivée en alternance, cet intranet visait à centraliser des ressources internes pour les collaborateurs (fiches outils, documents RH, contacts utiles, etc.).",
            "Utilisé quotidiennement par une dizaine de personnes, ce projet a été un bon terrain d’apprentissage sur WordPress. Bien que non connecté à des APIs, il a servi de base à des réflexions plus larges sur les outils internes, et a contribué à ma montée en compétence au sein de l’entreprise.",
            "Ce projet a aussi posé les fondations de la refonte du site vitrine, en démontrant ma capacité à concevoir une solution simple, utile, et bien structurée."
        ]
    },
    {
      title: 'App mobile blog/réseau Social',
      description: 'Une application Mobile type blog/réseau social pour mettre en relation les citoyens français',
      image: appSocial,
      techs: ['Symfony', 'Flutter', 'MariaDb', 'Docker'],
      link: '#',
      context: "Formation",
      slug: 'social',
      fullDescription: [
            "Développée dans le cadre de mon bac +3, cette application répondait à un appel d’offres fictif de l’État. Le but : concevoir une plateforme mobile de type blog/réseau social permettant aux citoyens de partager des ressources (articles, images, vidéos, etc.).",
            "Symfony servait ici uniquement de backend (API REST), tandis que Flutter assurait l’interface mobile. Les utilisateurs pouvaient se suivre entre eux, consulter les publications des comptes suivis, et voir les contenus les plus pertinents.",
            "Un système de modération était intégré, avec la possibilité pour certains utilisateurs de masquer des publications jugées inappropriées.",
            "Ce projet m’a permis de gérer une équipe pour la première fois, en tant que chef de projet technique. Une expérience marquante, aussi bien sur le plan humain que technique."
        ]
    },
    {
      title: 'App mobile de livraison',
      description: 'Une app mobile type UberEats développée en React Native, connectée à une API Spring Boot.',
      image: livraison,
      techs: ['React Native', 'Spring Boot', 'MongoDB', 'PostGres', 'Docker', 'K8s'],
      link: '#',
      context: "Formation",
      slug: 'delivery',
      fullDescription: [
            "Réalisé dans le cadre de mon bac +5, ce projet avait pour but de créer un clone d’UberEats, avec une architecture complète digne d’un environnement de production.",
            "Nous étions une équipe de 5, et j’en assurais la direction technique tout en développant les parties Vue.js (admin web) et Spring Boot (API). J’ai également mis en place l’environnement de production avec Docker Swarm, Traefik en reverse proxy / API Gateway, et Kafka pour la communication inter-services.",
            "PostgreSQL gérait la majorité des données métier, tandis que MongoDB était utilisé pour les données de géolocalisation, afin d’absorber un flux important en temps réel.",
            "Ce projet, structuré autour de 5 API Spring Boot, 2 apps mobiles, 1 interface web, Kafka et Docker, a été livré à 90 % dans les temps. Une vraie réussite collective dont je suis très fier."
        ]
    },
    { 
      title: 'To do List Interractive',
      description: 'Une application de To-do list partagée entre utilisateurs',
      image: todo,
      techs: ['Symfony', 'Javascript', 'MySql'],
      link: '#',
      context: "Formation",
      slug: 'todo',
      fullDescription: [
            "Premier vrai projet de développement solo, cette application de to-do list collaborative a été réalisée lors de mon bac +2.",
            "J’ai utilisé Symfony 6 pour gérer l’authentification et la base de données. Les utilisateurs pouvaient partager leurs listes entre eux via leurs identifiants, avec un système de permissions basique. Je ne connaissais pas encore les Voters Symfony, donc la gestion des droits restait rudimentaire, mais fonctionnelle.",
            "J’ai démarré ce projet quatre fois avant de trouver la bonne direction. C’était fastidieux, mais très formateur. J’ai aussi utilisé Bootstrap pour la mise en page.",
            "Ce projet m’a appris à structurer une application, persévérer, et surtout… à ne pas avoir peur de tout recommencer pour faire mieux."
        ]
    },
  ]