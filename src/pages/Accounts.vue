<template>
  <div class="main-container">
    <Sidenavbar />
    <div class="chart-wrapper">
      <div class="chart-container">
        <a-table
          :columns="columns"
          :data-source="data"
          @change="handleChange"
          :showSorterTooltip="showSorterTooltip"
          :pagination="paginationConfig"
          class="custom-table"
        />
      </div>
      <div class="float-buttons">
        <a-float-button
          shape="circle"
          type="primary"
          :icon="customerServiceIcon"
        />
        <a-float-button
          shape="square"
          type="primary"
          :icon="customerServiceIcon"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Sidenavbar from '../components/Sidenavbar.vue';
import { CustomerServiceOutlined } from '@ant-design/icons-vue';
import { FloatButton, Table } from 'ant-design-vue';
import { fetchCardDetails } from '@/composables/fetchCardDetails';
import { onBeforeMount } from 'vue';

const data = ref([]);
const getCarddetails = async () => {
  const userid = localStorage.getItem('userId');
  const response = await fetchCardDetails(userid);
  console.log(response);
  if (response) {
    data.value = response.map((card, index) => ({
      key: index + 1,
      name: card.cardOwner,
      card: card.cardType,
      postalCode: card.postalCode,
      cvv: card.cardCVV,
      cardincome: card.cardIncome,
      address: card.address
    }));
  }
};

// Define columns with custom render functions and styles
const columns = [
  {
    title: 'Full Name',
    dataIndex: 'name',
    showSorterTooltip: {
      target: 'full-header',
    },
    filters: [
      { text: 'Joe', value: 'Joe' },
      { text: 'Jim', value: 'Jim' },
      {
        text: 'Submenu',
        value: 'Submenu',
        children: [
          { text: 'Green', value: 'Green' },
          { text: 'Black', value: 'Black' },
        ],
      },
    ],
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend'],
  },
  {
    title: 'Card type',
    dataIndex: 'card',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Postal code',
    dataIndex: 'postalCode',
    slots: { customRender: 'action' },
  },
  {
    title: 'Card Income',
    dataIndex: 'cardincome',
    slots: { customRender: 'action' },
  },
  {
    title: 'CVV',
    dataIndex: 'cvv',
    slots: { customRender: 'action' },
  },
  {
    title: 'Address',
    dataIndex: 'address',
    filters: [
      { text: 'London', value: 'London' },
      { text: 'New York', value: 'New York' },
    ],
    onFilter: (value, record) => record.address.indexOf(value) === 0,
  },
];

// Handle table changes
const handleChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

// Handle pagination configuration
const paginationConfig = {
  pageSize: 5,
  showSizeChanger: false, // Optionally show or hide the page size changer
};

// Show sorter tooltip configuration
const showSorterTooltip = {
  target: 'sorter-icon',
};

// Define icon for float buttons
const customerServiceIcon = CustomerServiceOutlined;

onBeforeMount(() => {
  getCarddetails();
});
</script>

<style scoped>
.main-container {
  display: flex;
  width: 100%;
}

.chart-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.chart-container {
  width: 900px;
  margin-top: 9%;
  background-color: #f0f2f5;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

/* Scoped styles for custom table appearance */
.custom-table .ant-table-thead > tr > th {
  font-weight: bold;
  color: #1a202c; /* Adjust this color as needed */
}

.custom-table .ant-table-tbody > tr > td {
  font-weight: bold;
  color: #2d3748; /* Adjust this color as needed */
}

.float-buttons {
  position: fixed;
  bottom: 20px;
  right: 20px;
}
</style>
