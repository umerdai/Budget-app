<template>
  <div class="relative h-screen">
    <video :src="videoSrc" autoplay loop muted class="video">
      Your browser does not support the video tag.
    </video>
    <div class="overlay">
      <h1 class="text-white text-2xl font-bold mb-8">
        A better way to manage your finance future with slick
      </h1>
      <p class="text-white text-2xl mb-8">
        Track and manage your finances effortlessly with our intuitive finance management app. From budgeting and expense tracking to financial goal setting, our app provides all the tools you need to stay on top of your financial health and make informed decisions.
      </p>
      <div class="flex flex-col items-center justify-center p-4 space-y-4  ">
        <input 
          type="email" 
          placeholder="Enter your email" 
          class="w-72 p-3  border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button 
          class="bg-yellow-400 text-gray-800 text-lg font-semibold py-3 px-6 rounded-lg shadow hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        >
          Get Started
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const videoSrc = new URL('@/assets/bg-video.mp4', import.meta.url).href;
</script>

<style scoped>
.video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}

.overlay {
  position: relative;
  text-align: center;
  padding: 1rem;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.overlay h1 {
  font-size: 2rem; /* Tailwind's text-4xl */
  margin-bottom: 1rem; /* Tailwind's mb-4 */
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  max-width: 90%; /* Adjust this value as needed */
}

.overlay p {
  font-size: 1.rem; /* Tailwind's text-xl */
  margin-bottom: 1rem;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
}
</style>
