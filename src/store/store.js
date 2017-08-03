// store.js

import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

// Create the Vuex instance by combining the state actions mutations getters and modules objects
// Then export the Vuex store for use by components in our awesome Vue application
const store = new Vuex.Store({

  // This is where you define the data structure of your application.
  // You can also set default or initial state here.
  state: {
    users: [],
  },

  // Actions are where you define the calls that will commit changes to your store.
  actions: {
    LOAD_USERS_LIST({ commit }) {
      axios.get('http://localhost:4040/api/users').then((response) => {
        commit('SET_USERS_LIST', { list: response.data });
      }, (err) => {
        console.log(err);
      });
    },
    ADD_NEW_USER({ commit }, user) {
      commit('SET_NEW_USER', user);
      axios.post('http://localhost:4040/api/users', user).then((response) => {
        console.log(response);
      }, (err) => {
        console.log(err);
      });
    },
  },

  // The mutations calls are the only place that the store can be updated.
  mutations: {
    SET_USERS_LIST(state, { list }) {
      state.users = list;
    },
    SET_NEW_USER(state, list) {
      state.users.push(list);
    },
  },

  // Getters are a way to grab computed data from the store
  // For example if you have a project list one component might only want to show projects
  // that are completed
  getters: {
  },

  // As your application grows this is a good way to organize your codebase
  modules: {
  },

});

export default store;
