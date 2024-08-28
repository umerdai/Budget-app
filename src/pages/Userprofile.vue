<template>
  <div class="flex w-screen h-screen bg-[#fafafa]">
    <!-- Sidebar -->
    <Sidenavbar />

    <!-- Main Content Area -->
    <div class="flex-1 p-6 overflow-hidden">
      <!-- User Cards -->
      <Usercards />

      <!-- Expenditure Chart and Recent Activity -->
      <div class="flex mt-8 space-x-2">
        <!-- Expenditure Chart (65% width) -->
        <div class="w-2/3 bg-white rounded-lg shadow p-2">
          <Suspense>
            <template #default>
              <Expenditurechart />
            </template>
            <template #fallback>
              <!-- You can add a loading spinner here if needed -->
              <div>Loading...</div>
            </template>
          </Suspense>
        </div>

        <!-- Recent Activity (35% width) -->
        <div class="w-1/3 bg-white rounded-lg shadow p-2">
          <Suspense>
            <template #default>
              <RecentActivity />
            </template>
            <template #fallback>
              <!-- You can add a loading spinner here if needed -->
              <div>Loading...</div>
            </template>
          </Suspense>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidenavbar from '@/components/Sidenavbar.vue';
import Usercards from '@/components/Usercards.vue';
import { onMounted } from 'vue';

import { defineAsyncComponent } from 'vue';
// Lazy load the components
const Expenditurechart = defineAsyncComponent(() => import('@/components/Expenditurechart.vue'));
const RecentActivity = defineAsyncComponent(() => import('@/components/Recentactivity.vue'));


</script>

<style scoped>
/* Custom styles if needed */
</style>
