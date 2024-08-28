<template>
  <div class="expenditure-chart w-full">
    <h1 class="text-xl font-bold mb-3">Expenditure Chart</h1>
    <ApexCharts 
      type="line" 
      height="350" 
      :options="chartOptions" 
      :series="chartSeries" 
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ApexCharts from 'vue3-apexcharts';

const chartOptions = ref({
  chart: {
    dropShadow: {
      enabled: true,
      color: '#000',
      top: 18,
      left: 7,
      blur: 10,
      opacity: 0.2
    },
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false
    }
  },
  colors: ['#77B6EA', '#545454'],
  dataLabels: {
    enabled: true,
  },
  stroke: {
    curve: 'smooth'
  },
  title: {
    align: 'left'
  },
  grid: {
    borderColor: '#e7e7e7',
    row: {
      colors: ['#f3f3f3', 'transparent'],
      opacity: 0.5
    },
  },
  markers: {
    size: 1
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    title: {
      text: 'Month'
    }
  },
  yaxis: {
    title: {
      text: 'Temperature'
    },
    min: 5,
    max: 40
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    floating: true,
    offsetY: -25,
    offsetX: -5
  }
});

const chartSeries = ref([{
  name: "High - 2013",
  data: [28, 29, 33, 36, 32]
}, {
  name: "Low - 2013",
  data: [12, 11, 14, 18, 17]
}]);
</script>

<style scoped>
.expenditure-chart {
  width: 100%;
}
</style>
