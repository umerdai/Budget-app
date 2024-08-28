<script setup>
import Navbar from './components/Navbar.vue';
import ImageContainer from './components/VideoContainer.vue';
import Socialproof from './components/Socialproof.vue';
import HeadingContainer from './components/HeadingContainer.vue';
import CardDesign from './components/Card_Design.vue';
import UserReviews from './components/UserReviews.vue';
import TrustedBy from './components/Trustedby.vue';
import QNA from './components/QNA.vue';
import ContactUs from './components/Contactus.vue';
import Footer from './components/Footer.vue';
import Login from './pages/Login.vue';

</script>

<template>
  <div>
    <router-view/>
  </div>
</template>

<style scoped>
body {
  font-family: 'PT Sans Narrow', sans-serif;
}
</style>
