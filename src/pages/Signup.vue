<template>
  <div>
    <Navbar />
    <div v-if="errorMessage" class="alert">
      {{ errorMessage }}
    </div>
    <div class="flex flex-col items-center justify-center">
      <h1 class="text-4xl font-bold mt-10">Welcome to Signup</h1>
      <form @submit.prevent="handleSignup" class="flex flex-col items-center justify-center mt-10">
        <input
          type="text"
          v-model="username"
          placeholder="Username"
          class="border-2 border-solid border-gray-300 p-2 w-80"
        />
        <input
          type="password"
          v-model="password"
          placeholder="Password"
          class="border-2 border-solid border-gray-300 p-2 w-80 mt-4"
        />
        <button type="submit" class="bg-[#004653] text-white p-2 w-80 mt-4">
          Signup
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/authStores';
import Navbar from '@/components/Navbar.vue';

const username = ref('');
const password = ref('');
const errorMessage = ref('');
const router = useRouter();
const authStore = useAuthStore();

const handleSignup = async () => {
  try {
    await authStore.signup(username.value, password.value);
    router.push('/login');
  } catch (error) {
    if (error.response && error.response.data.includes("duplicate key error")) {
      errorMessage.value = "User already exists. Please try logging in.";
    } else {
      errorMessage.value = "Signup failed. Please try again.";
    }
  }
};
</script>

<style scoped>
.alert {
  color: red;
  margin-bottom: 20px;
}
</style>
