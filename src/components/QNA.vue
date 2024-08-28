<template>
  <div data-aos="zoom-in">
    <div  class="text-center mb-5 text-2xl font-bold">Your most commonly asked questions</div>
    <div class="p-5">
      <!-- Question 1 -->
      <div  class="border border-gray-300 rounded-lg shadow-sm p-4 mb-4 mx-auto bg-gray-100 md:w-2/5 min-w-[40%]">
        <div class="flex justify-between items-center">
          <h2 class="text-lg font-bold">What is an online bank?</h2>
          <button @click="toggleAnswer(1)" class="text-xl font-semibold bg-yellow-500 text-gray-800 py-2 px-4 rounded-lg shadow hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300">
            <span v-if="showAnswer1">-</span>
            <span v-else>+</span>
          </button>
        </div>
        <div v-if="showAnswer1" class="mt-4">
          <p class="text-md">
            An online bank is a financial institution that operates entirely online, without physical branch locations. It allows users to perform banking activities like transfers, payments, and savings through a website or mobile app.
          </p>
        </div>
      </div>
      <!-- Question 2 -->
      <div class="border border-gray-300 rounded-lg shadow-sm p-4 mb-4 mx-auto bg-gray-100 md:w-2/5 min-w-[40%]">
        <div class="flex justify-between items-center">
          <h2 class="text-lg font-bold">How do I set up my budget in the app?</h2>
          <button @click="toggleAnswer(2)" class="text-xl font-semibold bg-yellow-500 text-gray-800 py-2 px-4 rounded-lg shadow hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300">
            <span v-if="showAnswer2">-</span>
            <span v-else>+</span>
          </button>
        </div>
        <div v-if="showAnswer2" class="mt-4">
          <p class="text-md">
            To set up your budget, start by inputting your monthly income and fixed expenses. Then, categorize your variable expenses and allocate funds to each category. The app will help you track your spending and adjust your budget as needed.
          </p>
        </div>
      </div>
      <!-- Question 3 -->
      <div class="border border-gray-300 rounded-lg shadow-sm p-4 mb-4 mx-auto bg-gray-100 md:w-2/5 min-w-[40%]">
        <div class="flex justify-between items-center">
          <h2 class="text-lg font-bold">Is my financial data safe with the budget planner app?</h2>
          <button @click="toggleAnswer(3)" class="text-xl font-semibold bg-yellow-500 text-gray-800 py-2 px-4 rounded-lg shadow hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300">
            <span v-if="showAnswer3">-</span>
            <span v-else>+</span>
          </button>
        </div>
        <div v-if="showAnswer3" class="mt-4">
          <p class="text-md">
            Yes, reputable budget planner apps use encryption and other security measures to protect your financial data. Be sure to choose a trusted app with positive reviews and strong security protocols.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AOS from 'aos';
 import 'aos/dist/aos.css';
 import { onMounted } from 'vue';
 onMounted(() => {
  AOS.init({
    duration: 500, // Animation duration in milliseconds
    easing: 'ease-in-out', // Easing function
    
  });
});
const showAnswer1 = ref(false);
const showAnswer2 = ref(false);
const showAnswer3 = ref(false);
const showAnswer4 = ref(false);

function toggleAnswer(questionNumber) {
  if (questionNumber === 1) showAnswer1.value = !showAnswer1.value;
  if (questionNumber === 2) showAnswer2.value = !showAnswer2.value;
  if (questionNumber === 3) showAnswer3.value = !showAnswer3.value;
  if (questionNumber === 4) showAnswer4.value = !showAnswer4.value;
}


</script>

<style scoped>
/* Add any additional styles here */
</style>
