<template>
  <nav class="navbar navbar-top">
    <input-search type="search" name="search" class="search-position" placeholder="Search" required="" autofocus="" />
    <router-link to="/login">
      <img src="assets/shuffle.png" class=" btn-custom" />
      <buttonhut type="submit" caption="Switch Company" class="btn-custom"></buttonhut>
  
    </router-link>
  
    <a href="#" v-if="isLoggedIn" @click="logout">
      <img src="assets/logout.png" class="btn-custom"/>
      <buttonhut type="submit" caption="Log out" class="btn-custom "></buttonhut>
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

.btn-custom {
  padding: 10px 10px 10px 0;
  background-color: #FF3300;
  margin: 0px;
  border: 0px;
  color: white;
}
.btn-custom:hover{
    opacity: 0.5;
}
.search-position {
  right: 20px;
}
</style>
