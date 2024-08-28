<template>
    <div>
      <Navbar />
      <div v-if="errorMessage" class="text-red-500 mt-4">
        {{ errorMessage }}
      </div>
      <div class="flex flex-col items-center justify-center">
        <h1 class="text-4xl font-bold mt-10">Welcome to Login</h1>
        <form @submit.prevent="forgotpassword" class="flex flex-col items-center justify-center mt-10">
          <input
            type="text"
            v-model="username"
            placeholder="Username"
            class="border-2 border-solid border-gray-300 p-2 w-80"
          />
          <input
            type="email"
            v-model="forgotemail"
            placeholder="Email"
            class="border-2 border-solid border-gray-300 p-2 w-80 mt-4"
          />
          <button type="submit" class="bg-[#004653] text-white p-2 w-80 mt-4">
            Get Password
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
  const forgotemail = ref('');
  const errorMessage = ref(''); // State to hold the error message
  const router = useRouter();
  const authStore = useAuthStore();
  
  const forgotpassword = async () => {
    try {
      // Clear any previous error messages
      errorMessage.value = '';
  
      // Perform the forgot password logic
      console.log("Email: ", forgotemail.value);
      console.log("Username: ", username.value);
  
      // Simulate an API call
      const response = await authStore.forgotpassword(forgotemail.value, username.value);
      
      if (response.success) {
        // Handle successful response
        alert('Password reset email sent successfully!');
      } else {
        // Handle response error
        errorMessage.value = 'Failed to send password reset email.';
      }
  
    } catch (error) {
      // Handle any other errors (e.g., network issues, server errors)
      if (error.response) {
        errorMessage.value = error.response.data.message || 'Failed to send password reset email.';
      } else if (error.request) {
        errorMessage.value = 'No response from server.';
      } else {
        errorMessage.value = error.message || 'An error occurred.';
      }
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
  