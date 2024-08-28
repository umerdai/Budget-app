import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Login from '../pages/Login.vue';
import UserProfile from '../pages/Userprofile.vue';
import { useAuthStore } from "../stores/authStores"; // Import the store
import signup from '../pages/Signup.vue';
import Account from '../pages/Accounts.vue';
import Transactions from '../pages/Transactions.vue';
import Forgotpassword from '@/pages/Forgotpassword.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/signup', component: signup },
  { path: '/forgotpassword', component: Forgotpassword },
  { path: '/userprofile', component: UserProfile, meta:{requiresAuth:true}  },
  { path: '/userprofile/accounts', component: Account, meta:{requiresAuth:true}  },
  { path: '/userprofile/transactions', component: Transactions, meta:{requiresAuth:true}  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  console.log(authStore.token);
  console.log(authStore.id);
  // console.log(authStore.response.data);

  if (to.matched.some(record => record.meta.requiresAuth) && !authStore.isAuthenticated) {
    next('/login'); // Redirect to login if not authenticated
  } else {
    next(); // Proceed to route
  }
});
export default router;
