<template>
    <div data-aos="flip-left" >
      <h1 class="text-center m-10 font-bold text-3xl mb-3.5">Contact Us</h1>
      <p class="text-center mb-7">We would love to help you.</p>
      <div class="flex flex-wrap justify-center">
        <div class="basis-full sm:basis-2/5 p-5">
          <h3 class="text-xl font-semibold">Send Your Request</h3>
          <form ref="form" @submit.prevent="sendEmail">
            <div class="flex flex-wrap justify-between">
              <div class="flex-1 min-w-[calc(50%-0.5rem)] mb-4 mr-1">
                <label for="name">Name</label>
                <input
                  type="text"
                  placeholder="John Elliott"
                  name="from_name"
                  class="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>
              <div class="flex-1 min-w-[calc(50%-0.5rem)] mb-4 mr-1">
                <label for="phone">Phone</label>
                <input
                  type="text"
                  placeholder="+92 333 155 3455"
                  name="user_phone"
                  class="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>
              <div class="flex-1 min-w-[calc(50%-0.5rem)] mb-4 mr-1">
                <label for="country">Country</label>
                <input
                  type="text"
                  placeholder="America"
                  name="user_country"
                  class="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>
              <div class="flex-1 min-w-[calc(50%-0.5rem)] mb-4 mr-1">
                <label for="city">City</label>
                <input
                  type="text"
                  placeholder="New York"
                  name="user_city"
                  class="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>
            </div>
            <div class="flex flex-wrap justify-between">
              <div class="flex-1 min-w-[calc(50%-0.5rem)] mb-4 mr-1">
                <label for="address">Address</label>
                <input
                  type="text"
                  placeholder="House # 77-B, Street # 123"
                  name="user_address"
                  class="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>
              <div class="flex-1 min-w-[calc(50%-0.5rem)] mb-4">
                <label for="email">Email</label>
                <input
                  type="email"
                  placeholder="hello123@gmail.com"
                  name="user_email"
                  class="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>
            </div>
            <div class="mt-4">
              <label for="reason">Reason for Inquiry</label>
              <input
                type="text"
                placeholder="Product Demo"
                name="user_reason"
                class="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>
            <div class="mt-4">
              <label for="message">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message here"
                name="message"
                class="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>
            <button 
          class="bg-yellow-400 text-gray-800 text-lg font-semibold py-2 px-4 rounded-lg shadow hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        >
          Get Started
        </button>
          </form>
        </div>
        <div style="background: #004653; " class="basis-full sm:basis-1/4 p-5 mt-4 sm:mt-0">
          <h3 class="text-xl font-semibold text-white">Reach Us</h3>
          <table class="w-full">
            <tbody>
              <tr>
                <td class="bg-[#004653] text-white p-2">Email:</td>
                <td class="bg-[#004653] text-white p-2">omerabdullah317@gmail.com</td>
              </tr>
              <tr>
                <td class="bg-[#004653] text-white p-2">Phone:</td>
                <td class="bg-[#004653] text-white p-2">+92 333 122 6630</td>
              </tr>
              <tr>
                <td class="bg-[#004653] text-white p-2">Customer Service Hotline:</td>
                <td class="bg-[#004653] text-white p-2">+92 333 6674 332</td>
              </tr>
              <tr>
                <td class="bg-[#004653] text-white p-2">Address:</td>
                <td class="bg-[#004653] text-white p-2">860 Montana Rapids Suite 686, New Jersey</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
import { ref } from "vue";
import emailjs from "emailjs-com";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { onMounted } from 'vue';

 onMounted(() => {
  AOS.init({
    duration: 700, // Animation duration in milliseconds
    easing: 'ease-in-out', // Easing function
    
  });
});
const form = ref(null);

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_4oszztz",
      "template_5bhtm55",
      form.value,
      "EKlVwCuUQErWfvJtM"
    )
    .then(
      (result) => {
        console.log("SUCCESS!", result.text);
        alert("Your message has been sent successfully.");
      },
      (error) => {
        console.log("FAILED...", error.text);
        alert("Failed to send the message. Please try again.");
      }
    );
};
</script>
  
  <style scoped>

  </style>
  