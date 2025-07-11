<script setup>
import SectionTitle from './SectionTitle.vue';
</script>

<template>
  <footer id="kontak" class="py-20 bg-gray-800 text-white">
    <div class="container mx-auto px-6 text-center">
      <SectionTitle title="Hubungi Saya" />
      <p class="text-xl text-gray-300 mb-8">
        Jangan ragu untuk terhubung atau bertanya.
      </p>

      <a
      href="https://mail.google.com/mail/?view=cm&fs=1&to=hanjayahartono27@gmail.com&su=Halo&body=Hi%20Hanjaya%2C%0A"
      target="_blank" rel="noopener noreferrer"
        class="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg
               hover:bg-blue-700 transition-colors duration-300 inline-block mb-12"
      >
        Kirim Email
      </a>
      <div class="flex justify-center space-x-6 mb-8">

        <!-- GitHub -->
        <a
        href="https://github.com/Hanjaya27"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center gap-2 text-gray-400 hover:text-white transition"
>
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.06c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.46-2.38 1.23-3.22-.14-.3-.54-1.52.11-3.18 0 0 1-.32 3.3 1.23a11.52 11.52 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.66.25 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.44.38.83 1.1.83 2.22v3.29c0 .33.21.7.83.58C20.56 22.3 24 17.79 24 12.5 24 5.87 18.63.5 12 .5Z"/>
        </svg>
        <span>GitHub</span>
        </a>

        <!-- LinkedIn -->
        <a
        href="https://www.linkedin.com/in/hanjaya-hartono-7b0513374/"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center gap-2 text-gray-400 hover:text-white transition"
  >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5.001 2.5 2.5 0 0 0 0-5zM2.4 9h5.2v12H2.4zM9.6 9h4.98v1.64h.07c.69-1.31 2.38-2.7 4.9-2.7 5.24 0 6.2 3.45 6.2 7.93V21h-5.2v-6.6c0-1.58-.03-3.62-2.2-3.62s-2.53 1.72-2.53 3.5V21H9.6z"/>
        </svg>
        <span>LinkedIn</span>
  </a>
      </div>

      <!-- Tahun dinamis -->
      <p class="text-gray-500">
        &copy; {{ new Date().getFullYear() }} Hanjaya Hartono.
      </p>
    </div>
  </footer>
</template>
