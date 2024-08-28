<template>
  <div>
    <Navbar />
    <div v-if="errorMessage" class="text-red-500 mt-4">
      {{ errorMessage }}
    </div>
    <div class="flex flex-col items-center justify-center">
      <h1 class="text-4xl font-bold mt-10">Welcome to Login</h1>
      <form @submit.prevent="handleLogin" class="flex flex-col items-center justify-center mt-10">
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
        <input
          v-show="forgot === true" 
          type="email"
          v-model="enteremail"
          placeholder="Enter Email"
          class="border-2 border-solid border-gray-300 p-2 w-80 mt-4"
        />
        <div @click="forgotpassword" class="forgot-password mt-3 mr-56">
          forgot password?
        </div>
        <button type="submit" class="bg-[#004653] text-white p-2 w-80 mt-4">
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/authStores';
import Navbar from '@/components/Navbar.vue';

const username = ref('');
const password = ref('');
const errorMessage = ref(''); // State to hold the error message
const enteremail = ref('');
const router = useRouter();
const authStore = useAuthStore();
const forgot = ref(false);

const forgotpassword = async () => {
 router.push("/forgotpassword");
};

const handleLogin = async () => {
  try {
    await authStore.login(username.value, password.value);
    if (authStore.isAuthenticated) {
      router.push('/userprofile'); // Redirect to user profile page after successful login
    }
  } catch (error) {
    if (error.response) {
      errorMessage.value = error.response.data.message || 'Login failed'; // Set error message
    } else if (error.request) {
      errorMessage.value = 'No response from server';
    } else {
      errorMessage.value = error.message || 'An error occurred';
    }
    alert(errorMessage.value); // Show alert with the error message
  }
};
</script>

<style scoped>
.forgot-password {
  text-decoration: underline;
  color: inherit; /* Inherit color from the parent, or use initial color */
  cursor: pointer; /* Changes the cursor to pointer on hover */
}

.forgot-password:hover {
  color: blue;
}
</style>
