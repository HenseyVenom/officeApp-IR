import Vue from 'vue';

import App from './app.vue';

import store from './store/store';

new Vue(App).$mount('#app');


/* eslint-disable no-new */
new Vue({
  store,
  App,
}).$mount('#app');