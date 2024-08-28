<template>
    <div v-if="showForm">
      <!-- Overlay to dull the background -->
      <div class="overlay"></div>
      
      <!-- Form Container -->
      <div class="form-container">
        <h2>Financial Information</h2>
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="bankBalance">Bank Balance:</label>
            <input
              id="bankBalance"
              v-model="form.bankBalance"
              type="number"
              step="0.01"
              required
            />
          </div>
  
          <div class="form-group">
            <label for="email">Email</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              step="0.01"
              required
            />
          </div>
          <div class="form-group">
            <label for="yearlyIncome">Yearly Income:</label>
            <input
              id="yearlyIncome"
              v-model="form.yearlyIncome"
              type="number"
              step="0.01"
              required
            />
          </div>
  
          <div class="form-group">
            <label for="totalIncomeMonthly">Total Income (Monthly):</label>
            <input
              id="totalIncomeMonthly"
              v-model="form.totalIncomeMonthly"
              type="number"
              step="0.01"
              required
            />
          </div>
  
          <div class="form-group">
            <label for="totalExpenseMonthly">Total Expense (Monthly):</label>
            <input
              id="totalExpenseMonthly"
              v-model="form.totalExpenseMonthly"
              type="number"
              step="0.01"
              required
            />
          </div>
  
          <div class="form-buttons">
            <button type="submit" class="submit-button">Submit</button>
            <button type="button" class="cancel-button" @click="handleCancel">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useAuthStore } from '@/stores/authStores';
  const authStores = useAuthStore();
  const form = ref({
    bankBalance: '',
    email: '',
    yearlyIncome: '',
    totalIncomeMonthly: '',
    totalExpenseMonthly: '',
  });
  
  const showForm = ref(true); // Set to true to display the form and overlay
  
  const handleSubmit = async () => {
    try{
      console.log("Form Data Submitted:", form.value);
      console.log("this is the userid:", authStores.userId);
      const response = await axios.post('http://localhost:3000/user/data', {
      ...form.value,
      userId: authStores.userId
    });
        showForm.value = false;
   
    }
    catch (error) {
      console.error('Form submission failed:', error);
    }
  };
  
  const handleCancel = () => {
    showForm.value = false;
  };
</script>
  
  <style scoped>
  /* Overlay styling */
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Semi-transparent black background */
    z-index: 5; /* Ensure it's below the form but above other content */
  }
  
  /* Form container styling */
  .form-container {
    max-width: 500px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f9f9f9;
    position: relative; /* Ensure relative positioning for z-index */
    z-index: 10; /* Higher than the background component */
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }
  
  .form-buttons {
    display: flex;
    justify-content: space-between;
  }
  
  button {
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .submit-button {
    background-color: #007bff;
    color: white;
  }
  
  .submit-button:hover {
    background-color: #0056b3;
  }
  
  .cancel-button {
    background-color: #ccc;
    color: black;
  }
  
  .cancel-button:hover {
    background-color: #999;
  }
  </style>
  