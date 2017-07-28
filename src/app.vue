<template>
  <router-view></router-view>
</template>

<script>
import Vue from 'vue';
import VueRouter from 'vue-router/dist/vue-router';
import LoginRoutes from 'features/Login/login.routes';
import FoobarRoutes from 'features/foobar/foobar.routes';
import 'common/components'; // same as from '../../../common/components/index.js';
import BootstrapCSS from 'bootstrap/dist/css/bootstrap.css';
import Bootstrap from 'bootstrap';
import Jquery from 'jquery';
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
];
const router = new VueRouter({
  routes,
});
export default {
  router,
};
</script>