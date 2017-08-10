<template>
  <nav class="navbar navbar-top">
    <input-search type="search" name="search" placeholder="Search" required="" autofocus="" />
    <router-link to="/login">
      <my-button class="btn-switch-company" type="submit" caption="Switch Company">
        <img src="assets/shuffle.png" />
      </my-button>
    </router-link>
    <a href="#" v-if="isLoggedIn" @click="logout">
      <my-button class="btn-logout" type="submit" caption="Log out">
        <img src="assets/logout.png" />
      </my-button>
    </a>
  </nav>
</template>


<script>
export default {
  name: 'navigation-bar-top',
  methods: {
    logout() {
      this.$store.dispatch('LOG_OUT');
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    }
  }

};
</script>

<style>
.navbar-top {
  text-align: right;
  display: block !important;
  padding: 0px !important;
  background-color: #FF3300;
}

.btn-logout {
  padding: 10px;
  background-color: #FF3300;
  margin: 0px;
  border: 0px;
  color: white;
}

.btn-logout:hover {
  opacity: 0.5;
}

.btn-switch-company {
  padding: 10px;
  background-color: #FF3300;
  margin: 0px;
  border: 0px;
  color: white;
}

.btn-switch-company:hover {
  opacity: 0.5;
}
</style>
