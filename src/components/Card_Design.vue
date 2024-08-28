<script setup>
import CreditCard from '@/assets/Credit_Card.png'; 
import Phone from '@/assets/Dalto_phone.png'; 
import AOS from 'aos';
 import 'aos/dist/aos.css';
 import { onMounted } from 'vue';
 onMounted(() => {
  AOS.init({
    duration: 500, // Animation duration in milliseconds
    easing: 'ease-in-out', // Easing function
     // Animation only happens once
  });
});
</script>

<template>
  <div data-aos="fade-right"  class="flex flex-col m-5">
    <div class="flex justify-center items-center mb-5">
      <!-- Image container on the left -->
      <div  class="pr-10 ml-4 w-1/2 h-auto">
        <img :src="CreditCard" alt="Credit Card" class="rounded-xl w-full h-full object-cover">
      </div>
      <!-- Text and button on the right -->
      <div class="flex flex-col justify-center items-start ml-5">
        <h1 class="text-2xl font-bold mb-2">Control your spend on single platform</h1>
        <p class="text-l mb-4 mr-16">Seamlessly integrate Dalto with your accounting systems and consolidate your finance stack for the betterment of your future.</p>
        <button class="bg-yellow-400 text-gray-800 text-lg font-semibold py-2 px-4 rounded-lg shadow hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500">
          Get Started
        </button>
      </div>
    </div>
    <div class="flex justify-center items-center">
      <!-- Image container on the left -->
      <div class="pr-10 ml-4 w-1/2 h-auto">
        <img :src="Phone" alt="Phone" class="rounded-xl w-full h-full object-cover">
      </div>
      <!-- Text and button on the right -->
      <div class="flex flex-col justify-center items-start ml-5">
        <h1 class="text-2xl font-bold mb-2">Control your spend on single platform</h1>
        <p class="text-l mb-4 mr-16">Seamlessly integrate Dalto with your accounting systems and consolidate your finance stack for the betterment of your future.</p>
        <button class="bg-yellow-400 text-gray-800 text-lg font-semibold py-2 px-4 rounded-lg shadow hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500">
          Get Started
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
