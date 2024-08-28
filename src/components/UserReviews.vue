<script setup>
import Leftarrow from '@/assets/Left.png';
import Rightarrow from '@/assets/Right.png';
import ReviewPic from '@/assets/Lady1.jpeg'; // Import your picture here
</script>

<template>
  <div class="p-5" style="background-color: #f8f8f8;">
    <!-- Review Heading and Navigation Arrows -->
    <div class="flex items-center justify-between mb-5">
      <h1 class="text-2xl font-bold">My User Reviews</h1>
      <div class="flex space-x-4">
        <img :src="Leftarrow" alt="Left Arrow" class="w-8 h-8 cursor-pointer">
        <img :src="Rightarrow" alt="Right Arrow" class="w-8 h-8 cursor-pointer">
      </div>
    </div>

    <!-- Review Content Section -->
    <div class="flex flex-col md:flex-row items-start">
      <!-- Review Text Section -->
      <div class="flex-1 md:pr-4 mb-4 md:mb-0">
        <h2 class="text-xl font-bold mb-4">Great Services!</h2>
        <p class="text-base">
          This is a large paragraph of text where you can provide detailed information about our great banking app. 
          Our app offers a seamless and secure banking experience, allowing users to easily manage their finances, make transactions, and access a wide range of banking services. With our user-friendly interface and advanced security features, customers can confidently perform tasks such as checking account balances, transferring funds, paying bills, and tracking expenses. Our app also provides personalized financial insights and recommendations to help users make informed decisions and achieve their financial goals. 
        </p>
        <div class="mt-4">
          <p class="text-base font-bold">Ching chong wong</p>
          <p>Fashon designer</p>
        </div>
      </div>

      
    </div>
  </div>
</template>

<style scoped>
/* Add any additional styles here if needed */
</style>
