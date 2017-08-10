<template>
  <router-view>
  </router-view>
</template>

<script>
import Vue from 'vue';
import store from './store/store';
import VueRouter from 'vue-router/dist/vue-router';
import LoginRoutes from 'features/Login/login.routes';
import DashboardRoutes from 'features/Dashboard/dashboard.routes';
import 'common/components'; 
import VeeValidate from 'vee-validate';
import Bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


Vue.use(VueRouter);
Vue.use(VeeValidate);

const routes = [
  {
    path: '/',
    redirect(/* routeInfo */) {
      /*
        example:
        if (someService.loggedIn) {
          return '/foo';
        } else {
          return '/login';
        }
      */
      return '/login';
    },
  },
  ...LoginRoutes,
  ...DashboardRoutes,
];
const router = new VueRouter({
  routes,
});
export default {
  store,
  router,
};
</script>