<template>
    <footer class="bg-[#111827] text-gray-400 py-10 text-sm">   
      <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 px-6 text-center md:text-left">
        <p>&copy; 2025 Romain Nigond. Tous droits réservés.</p>
        <div class="flex gap-4">
            <RouterLink to="/" class="hover:underline">Accueil</RouterLink>
            <RouterLink to="/projects" class="hover:underline">Projets</RouterLink>
            <RouterLink to="/about" class="hover:underline">A propos</RouterLink>
            <RouterLink to="/experience" class="hover:underline">Parcours</RouterLink>
            <RouterLink to="/contact" class="hover:underline">Contact</RouterLink>
            <RouterLink to="/legal" class="hover:underline">Mentions légales</RouterLink>
        </div>
      </div>
    </footer>
</template>