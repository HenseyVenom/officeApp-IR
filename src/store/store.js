// store.js

import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const LOGIN = 'LOGIN';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGOUT = 'LOGOUT';

// Create the Vuex instance by combining the state actions mutations getters and modules objects
// Then export the Vuex store for use by components in our awesome Vue application
const store = new Vuex.Store({

  // This is where you define the data structure of your application.
  // You can also set default or initial state here.
  state: {
    users: [],
    userProfile: {},
    // In our app, we need to know if the user is logged in
    // by checking if the user has a token in the browser local storage.
    isLoggedIn: !!localStorage.getItem('token'),
  },

  // Actions are where you define the calls that will commit changes to your store.
  actions: {
    LOAD_USERS_LIST({
      commit,
    }) {
      axios.get('http://localhost:4040/api/users').then((response) => {
        commit('SET_USERS_LIST', {
          list: response.data,
        });
      }, (err) => {
        console.log(err);
      });
    },
    ADD_NEW_USER({
      commit,
    }, user) {
      commit('SET_NEW_USER', user);
      return axios.post('http://localhost:4040/api/users', user).then((response) => {
        console.log(response);
      }, (err) => {
        console.log(err);
      });
    },
    REMOVE_USER({
      commit,
    }, user) {
      commit('REMOVE_USER', user);
      axios.delete(`http://localhost:4040/api/users/${user.id}`).then((response) => {
        console.log(response);
      }, (err) => {
        console.error(err);
      });
    },
    LOAD_USER_PROFILE({
      commit,
    }) {
      axios.get('http://localhost:4040/api/users').then((response) => {
        commit('SET_USER_PROFILE', {
          profile: response.data,
        });
      }, (err) => {
        console.log(err);
      });
    },
    UPDATE_USER_PROFILE({
      commit,
    }, user) {
      console.log(user.id);
      commit('UPDATE_USER_PROFILE', user);
      axios.put('http://localhost:4040/api/users').then((response) => {
        console.log(response);
      }, (err) => {
        console.error(err);
      });
    },
     /* UPDATE_USER_PROFILE(profile, {
       commit,
     }) {
       console.log(profile);
       commit('UPDATE_USER_PROFILE');
       axios.put('http://localhost:4040/api/users', { profile: store.state.userProfile }).then((response) => {
         commit('SET_USER_PROFILE', { profile: response.data });
       }, (err) => {
         console.error(err);
       });
     }, */
    LOG_IN({
      commit,
    }) {
      commit(LOGIN);
      return new Promise((resolve) => {
        setTimeout(() => {
          localStorage.setItem('token', 'JWT');
          commit(LOGIN_SUCCESS);
          resolve();
        }, 1);
      });
    },
    LOG_OUT({
      commit,
    }) {
      localStorage.removeItem('token');
      commit(LOGOUT);
    },
  },

  // The mutations calls are the only place that the store can be updated.
  mutations: {
    SET_USERS_LIST(state, {
      list,
    }) {
      state.users = list;
    },
    SET_NEW_USER(state, list) {
      state.users.push(list);
    },
    REMOVE_USER(state, user) {
      state.users.splice(state.users.indexOf(user), 1);
    },
    UPDATE_USER_PROFILE(state, user) {
      let foundUser = state.users.find(x => x.id === user.id);

      foundUser.name = user.name;
      foundUser.surname = user.surname;
      foundUser.email = user.email;
      foundUser.role = user.role;
      foundUser.accepted = user.accepted;
      foundUser.white = user.white;
    },
    SET_USER_PROFILE(state, {
      profile,
    }) {
      state.userProfile = profile;
    },
    /* EDIT_USER_PROFILE(state, payload) {
      state.userProfile.payload = payload
    }, */
    [LOGIN](state) {
      state.pending = true;
    },
    [LOGIN_SUCCESS](state) {
      state.isLoggedIn = true;
      state.pending = false;
    },
    [LOGOUT](state) {
      state.isLoggedIn = false;
    },

  },

  // Getters are a way to grab computed data from the store
  // For example if you have a project list one component might only want to show projects
  // that are completed
  getters: {
    isLoggedIn: state => state.isLoggedIn,
  },

  // As your application grows this is a good way to organize your codebase
  modules: {},

});

export default store;
