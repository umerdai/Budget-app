<template>
  <div class="flex">
    <!-- Sidebar Menu -->
    <nav
      :class="{
        'fixed top-0 left-0 w-64 h-screen bg-gray-800 text-white transform transition-transform duration-300': true,
        'translate-x-0': isOpen
      }"
      class="relative w-64 h-screen bg-gray-800 text-white flex flex-col py-6"
    >
      <h1 class="text-3xl text-center">Slick</h1>
      <ul class="flex flex-col space-y-2 p-4 flex-grow">
        <li><RouterLink to="/userprofile" class="block py-2 px-4 hover:bg-gray-700">Dashboard</RouterLink></li>
        <li><RouterLink to="/userprofile/transactions" class="block py-2 px-4 hover:bg-gray-700">Transactions</RouterLink></li>
        <li><RouterLink to="/userprofile/accounts" class="block py-2 px-4 hover:bg-gray-700">Accounts</RouterLink></li>
      </ul>

      <!-- HandleLogout Button -->
      <div class="p-4 mt-auto">
        <button
          @click="handleLogout"
          class="w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-200"
        >
          Handle Logout
        </button>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../stores/authStores';

const isOpen = ref(false);
const authStore = useAuthStore();

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const handleLogout = () => {
  console.log('Logout button clicked');
  authStore.logout();
};
</script>

<style scoped>
/* Remove media query-specific styles if not needed */
</style>
