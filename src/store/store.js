// store.js

import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import vuexCache from 'vuex-cache';

Vue.use(Vuex);

// Create the Vuex instance by combining the state actions mutations getters and modules objects
// Then export the Vuex store for use by components in our awesome Vue application
const store = new Vuex.Store({

  // This is where you define the data structure of your application.
  // You can also set default or initial state here.
  state: {
    users: [],
    // In our app, we need to know if the user is logged in
    // by checking if the user has a token in the browser local storage.
    isLoggedIn: !!localStorage.getItem('token'),
    flag: false,
  },

  plugins: [vuexCache],

  // Actions are where you define the calls that will commit changes to your store.
  actions: {
    LOAD_USERS_LIST({ commit, state }) {
      if (state.flag) {
        return Promise.resolve();
      }
      return axios.get('http://localhost:4040/api/users').then((response) => {
        commit('SET_USERS_LIST', { list: response.data });
        commit('CHANGE_FLAG');
      }, (err) => {
        console.log(err);
      });
    },
    ADD_NEW_USER({ commit }, user) {
      return axios.post('http://localhost:4040/api/users', user).then((response) => {
        commit('SET_NEW_USER', response.data);
        console.log(response);
      }, (err) => {
        console.log(err);
      });
    },
    DELETE_USER({ commit }, user) {
      commit('DELETE_ACCOUNT', user.id);
      return axios.delete(`http://localhost:4040/api/users/${user.id}`).then(() => {
      }, (err) => {
        console.log(err);
      });
    },
    UPDATE_USER_PROFILE({ commit }, user) {
      commit('UPDATE_USER_PROFILE', user);
      axios.put('http://localhost:4040/api/users').then((response) => {
        console.log(response);
      }, (err) => {
        console.error(err);
      });
    },
    LOG_IN({ commit }) {
      commit('LOGIN');
      return new Promise((resolve) => {
        setTimeout(() => {
          localStorage.setItem('token', 'JWT');
          commit('LOGIN_SUCCESS');
          resolve();
        }, 1);
      });
    },
    LOG_OUT({ commit }) {
      localStorage.removeItem('token');
      commit('LOGOUT');
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
    DELETE_ACCOUNT(state, account) {
      const id = state.users.map(user => user.id).indexOf(account);
      state.users.splice(id, 1);
    },
    UPDATE_USER_PROFILE(state, user) {
      const foundUser = state.users.find(x => x.id === user.id);
      foundUser.name = user.name;
      foundUser.surname = user.surname;
      foundUser.email = user.email;
      foundUser.role = user.role;
      foundUser.accepted = user.accepted;
      foundUser.white = user.white;
    },
    LOGIN(state) {
      state.pending = true;
    },
    LOGIN_SUCCESS(state) {
      state.isLoggedIn = true;
      state.pending = false;
    },
    LOGOUT(state) {
      state.isLoggedIn = false;
    },
    CHANGE_FLAG(state) {
      state.flag = true;
    },

  },

  // Getters are a way to grab computed data from the store
  // For example if you have a project list one component might only want to show projects
  // that are completed
  getters: {
    isLoggedIn: state => state.isLoggedIn,
  },

  // As your application grows this is a good way to organize your codebase
  modules: {
  },

});

export default store;