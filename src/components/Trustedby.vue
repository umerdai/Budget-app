<template>
  <div>
    <h1 class="text-center mt-5 text-2xl font-bold">Trusted By:</h1>
    <div class="slider flex flex-wrap justify-center">
      <div><img :src="Revolut" alt="revolut" class="w-36 h-1/4 mt-4" /></div>
      <div><img :src="Monzo" alt="monzo" class="w-36 h-1/4 mt-4" /></div>
      <div><img :src="Simple" alt="simple" class="w-36 h-1/4 mt-4" /></div>
      <div><img :src="N26" alt="n26" class="w-36 h-1/4 mt-4" /></div>

    </div>
  </div>
</template>

<script setup>
import Revolut from '../assets/Revolut.svg';
import Monzo from '../assets/Monzo.png';
import Simple from '../assets/Simple.png';
import N26 from '../assets/N26.jpg';
import Ally from '../assets/Chime.jpg';
import { onMounted } from 'vue';
import $ from 'jquery';
import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

onMounted(() => {
  $('.slider').slick({
    slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,

  autoplaySpeed: 2000,
})});
</script>

<style scoped>
/* You can add specific styles for the slider container if needed */
.slider img {
  display: block;
  margin: auto;
}
</style>
