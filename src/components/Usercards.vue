<template>
  <div class=" flex justify-between p-10">
    
    <div class="w-64 h-32 bg-white border border-gray-300 rounded-lg shadow-md flex flex-col justify-center items-start mr-10 p-4">
      <h2 class="text-black text-3xl mb-2">{{ value }} USD</h2>
      <span class="text-lg">Total Balance</span>
    </div>
    <div class="w-24 h-44 bg-[#fafafa] rounded-lg flex items-center justify-center mx-2">
      <h2 class="text-white text-2xl"></h2>
    </div>
    <!-- Card 3 -->
    <div class="w-40 h-48 bg-[#ff5668] rounded-lg shadow-md flex flex-col p-4 mx-5">
      <!-- Row for Signal Image and Span -->
      <div class="flex items-center justify-between mb-4">
        <!-- Signal Image -->
        <img src="../assets/signal.png" alt="Signal" class="w-14 h-8" />
        <!-- Span -->
        <span class="text-white text-lg">12/24</span>
      </div>
      <!-- Mastercard Image -->
      <img src="../assets/mastercard.png" alt="Mastercard" class="w-22 h-16 mb-4" />
      <!-- Card Value -->
      <h2 class="text-white text-3xl">{{ Card_Value_1 }} $</h2>
    </div>
    <!-- Card 4 -->
    <div class="w-40 h-48 bg-[#4d54e1] rounded-lg shadow-md flex flex-col p-4 mx-5">
      <!-- Row for Signal Image and Span -->
      <div class="flex items-center justify-between mb-4">
        <!-- Signal Image -->
        <img src="../assets/signal.png" alt="Signal" class="w-14 h-8" />
        <!-- Span -->
        <span class="text-white text-lg">12/24</span>
      </div>
      <!-- Mastercard Image -->
      <img src="../assets/visa.png" alt="Mastercard" class="w-20 h-16 mb-4 ml-6 mt-3" />
      <!-- Card Value -->
      <h2 class="text-white text-3xl">{{ Card_Value_2 }} $</h2>
    </div>
    <!-- Card 5 -->
    <div class="w-40 h-48 bg-[#212042] rounded-lg shadow-md flex flex-col p-4 mx-5">
      <!-- Row for Signal Image and Span -->
      <div class="flex items-center justify-between mb-4">
        <!-- Signal Image -->
        <img src="../assets/signal.png" alt="Signal" class="w-14 h-8" />
        <!-- Span -->
        <span class="text-white text-lg">12/24</span>
      </div>
      <!-- Mastercard Image -->
      <img src="../assets/stripe.png" alt="Mastercard" class="w-16 h-14 mb-4 p-1 ml-7 mt-2 " />
      <!-- Card Value -->
      <h2 class="text-white text-3xl">{{ Card_Value_3 }} $</h2>
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount, ref,onMounted } from 'vue';
import {fetchTotalBalance} from '@/composables/fetchTotalBalance';
import { fetchCardBalance } from '@/composables/fetchCradBalance';
import $ from 'jquery';
import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Card_Value_1 = ref(0);
const Card_Value_2 = ref(0);
const Card_Value_3 = ref(0);
const value = ref();

const getBalance=async ()=>{
  const userid=localStorage.getItem('userId');
 const data=await fetchTotalBalance(userid);
 console.log(data);
  value.value=data;
}
const cardBalance=async()=>{
  const userid=localStorage.getItem('userId');
  const data=await fetchCardBalance(userid);
  console.log(data);
  if (Array.isArray(data) && data.length >= 3) {
    Card_Value_1.value = data[0];
    Card_Value_2.value = data[1];
    Card_Value_3.value = data[2];
  } else {
    console.error('Unexpected data format for card balances');
  }
}
onMounted(() => {
  $('.slider').slick({
    slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,

  autoplaySpeed: 2000,
})});
onBeforeMount(()=>{
  getBalance();
  cardBalance();
})

</script>

<style scoped>
/* Your component styles go here */
</style>
