<template>
  <router-view></router-view>
</template>

<script>
import Vue from 'vue';
import VueRouter from 'vue-router/dist/vue-router';
import LoginRoutes from 'features/Login/login.routes';
import FoobarRoutes from  'features/foobar/foobar.routes';
import 'common/components'; // same as from '../../../common/components/index.js';
import BootstrapCSS from 'bootstrap/dist/css/bootstrap.css';
//import BootstrapJS from 'bootstrap/dist/js/bootstrap.js';
import Bootstrap from 'bootstrap';
require('bootstrap-sass');
import Jquery from 'jquery';
//import VueTable from 'vuetable/dist/vue-table.js';
Vue.use(VueRouter);
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
  ...FoobarRoutes,
  //...ToolBarRoutes,
];
const router = new VueRouter({
  routes,
});
export default {
  router,
};
</script>