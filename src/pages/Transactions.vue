<template>
    <div class="flex">
        <!-- Sidebar -->
        <Sidenavbar />
    
        <!-- Main Content Area -->
        <div class="flex-1 p-6 mt-12">
          <!-- Container for both tables side by side -->
          <div class="flex space-x-4">
            <!-- Outgoing Transactions Table -->
            <div class="flex-1 bg-white rounded-lg shadow p-4">
              <outgoingTransactions />
            </div>
    
            <!-- Incoming Transactions Table -->
            <div class="flex-1 bg-white rounded-lg shadow p-4">
              <IncomingTransactions />
            </div>
          </div>
        </div>
      </div>
</template>

<script setup>
import Sidenavbar from '@/components/Sidenavbar.vue';
import outgoingTransactions from '@/components/Outgoingbalance.vue';
import IncomingTransactions from '@/components/Incomingbalance.vue';

</script>

<style scoped>
/* Your component-specific styles go here */
</style>