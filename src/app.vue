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
import 'common/components'; // same as from '../../../common/components/index.js';
import VeeValidate from 'vee-validate';
import Jquery from 'jquery';
import 'air-datepicker';
import 'air-datepicker/dist/js/i18n/datepicker.en.js'
import 'air-datepicker/dist/css/datepicker.min.css';
import BootstrapCSS from 'bootstrap/dist/css/bootstrap.css';
import Bootstrap from 'bootstrap';

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