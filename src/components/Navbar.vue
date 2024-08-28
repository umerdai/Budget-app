<template>
  <nav class="sticky top-0 z-50 p-2 flex items-center justify-between" style="background-color: #004653;">
    <div class="text-white text-2xl">Slick</div>
    <div class="flex space-x-8">
      <RouterLink  to="/" @click="scrollTo('home')" class="text-white hover:text-gray-300">Home</RouterLink>
      <RouterLink to="/" @click="scrollTo('socialproof')" class="text-white hover:text-gray-300">About</RouterLink>
      <RouterLink to="/" @click="scrollTo('heading')" class="text-white hover:text-gray-300">Services</RouterLink>
      <RouterLink  @click="scrollTo('contact')" class="text-white hover:text-gray-300">Contact</RouterLink>
      <RouterLink @click="scrollTo('QNA')" class="text-white hover:text-gray-300">QnA</RouterLink>
    </div>
    <div class="flex space-x-4">
      <router-link to="/login" class="text-md font-semibold rounded-full bg-yellow-500 text-gray-800 py-2 px-3 hover:bg-yellow-600">Log in</router-link>
      <router-link to="/signup" class="text-md font-semibold rounded-full bg-yellow-500 text-gray-800 py-2 px-3 hover:bg-yellow-600">Sign Up</router-link>
      
    </div>
  </nav>
</template>

<script setup>
import { useAuthStore } from '@/stores/authStores';

const scrollTo = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style scoped>
.btn {
  color: #fff;
  text-decoration: none;
  background-color: #333;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #555;
}
</style>
