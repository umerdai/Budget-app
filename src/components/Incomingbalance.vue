<template>
  <div class="flex flex-col p-6">
    <h1 class="text-2xl font-bold mb-4 text-center">Incoming Transactions</h1>

    <!-- Outgoing Transactions Table -->
    <div class="mb-6">
      <div class="overflow-y-auto max-h-80">
      <h2 class="text-xl font-semibold mb-2">Incoming Transactions</h2>
      <table class="min-w-full bg-white border border-gray-200 rounded-lg shadow">
        <thead>
          <tr class="border-b border-gray-200">
            <th class="p-3 text-left">Description</th>
            <th class="p-3 text-left">Amount</th>
            <th class="p-3 text-left">Card</th>
            <th class="p-3 text-left">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="transaction in incomingTransactions" :key="transaction._id">
            <td class="p-3">{{ transaction.description }}</td>
            <td class="p-3">${{ transaction.amount.toFixed(2) }}</td>
            <td class="p-3">{{ transaction.card }}</td>
            <td class="p-3">{{ new Date(transaction.date).toLocaleDateString() }}</td>
          </tr>
        </tbody>
      </table>
    </div>
      <button
        @click="openModal"
        class="mt-3 w-1/4 bg-red-600 text-white py-2 px-4 rounded-full hover:bg-red-700 transition duration-200"
      >
        Add Transaction
      </button>
    </div>

    <!-- Modal -->
    <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 class="text-xl font-semibold mb-4">Add Transaction</h2>
        
        <!-- Description Input -->
        <div class="mb-4">
          <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
          <input
            id="description"
            v-model="newTransaction.description"
            type="text"
            class="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        
        <!-- Amount Input -->
        <div class="mb-4">
          <label for="amount" class="block text-sm font-medium text-gray-700">Amount</label>
          <input
            id="amount"
            v-model="newTransaction.amount"
            type="number"
            class="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        
        <!-- Card Dropdown -->
        <div class="mb-4">
          <label for="card" class="block text-sm font-medium text-gray-700">Card Type</label>
          <select
            id="card"
            v-model="newTransaction.card"
            class="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm"
            required
          >
            <option value="" disabled>Select a card type</option>
            <option value="Visa">Visa</option>
            <option value="Mastercard">Mastercard</option>
            <option value="Stripe">Stripe</option>
          </select>
        </div>
        
        <!-- Modal Buttons -->
        <div class="flex justify-end space-x-4">
          <button @click="closeModal" class="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400">Cancel</button>
          <button @click="addTransaction" class="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">Add</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { useFetchTransactions } from '@/composables/fetchTransactions';
import { Addtransaction } from '@/composables/addTransactions';

// State for transactions
const incomingTransactions = ref([]);

// State for modal visibility
const showModal = ref(false);

// State for new transaction form
const newTransaction = ref({
  description: '',
  amount: 0,
  card: '',
  type: 'incoming'
});

// Fetch transactions
const fetchTransactions = async () => {
  try {
    const userId = localStorage.getItem('userId');
    if (userId) {
      const data = await useFetchTransactions(userId);
      incomingTransactions.value = data.filter(transaction => transaction.type === 'incoming');
      console.log("Incoming Transactions fetched:", incomingTransactions.value);
    } else {
      console.log('User not logged in');
    }
  } catch (error) {
    console.error('Error fetching transactions:', error);
  }
};

// Open modal
const openModal = () => {
  showModal.value = true;
};

// Close modal
const closeModal = () => {
  showModal.value = false;
  resetForm();
};

// Add transaction
const addTransaction = async () => {
  try {
    console.log('Adding transaction:', newTransaction.value);
    await Addtransaction(newTransaction.value);
    // Optionally, fetch transactions again to update the table
    
    await fetchTransactions();
    // After adding transaction, close the modal and reset form
    closeModal();
  } catch (error) {
    console.error('Error adding transaction:', error);
  }
};

// Reset form fields
const resetForm = () => {
  newTransaction.value.description = '';
  newTransaction.value.amount = 0;
  newTransaction.value.card = '';
  newTransaction.value.type='incoming';
};

onMounted(fetchTransactions);
</script>
<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 12px;
  text-align: left;
}

th {
  background-color: #f4f4f4;
}

button {
  cursor: pointer;
}
</style>
