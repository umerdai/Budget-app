<template>
  <div>
    <h1 class="text-xl font-bold mb-4">Recent Activity</h1>
    <ul>
      <!-- Loop through the first 5 transactions and display each item -->
      <li v-for="transaction in transactions.slice(0, 5)" :key="transaction._id" class="flex flex-col mb-4">
        <div class="flex justify-between">
          <span class="text-lg font-semibold">{{ transaction.description }}</span>
          <span>${{ transaction.amount.toFixed(2) }}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-gray-500">paid via ({{ transaction.card }})</span>
          <span class="text-gray-500">{{ new Date(transaction.date).toLocaleDateString() }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useFetchTransactions } from '@/composables/fetchTransactions';
import { onMounted, ref } from 'vue';

// Define a ref to hold the transaction data
const transactions = ref([]);

// Fetch transactions when the component is mounted
onMounted(async () => {
  try {
    const userId = localStorage.getItem('userId');
    if (userId) {
      const data = await useFetchTransactions(userId);
      transactions.value = data; // Assign fetched transactions to the ref
      console.log("Transactions fetched:", transactions.value);
    } else {
      console.log('User not logged in');
    }
  } catch (error) {
    console.error('Error fetching transactions:', error);
  }
});
</script>

<style scoped>
/* Your component styles go here */
</style>
