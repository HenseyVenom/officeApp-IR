<template>

  <nav class="navbar navbar-top">
    <input-search type="search" name="search" class="search-position" placeholder="Search" required="" autofocus="" /> 
    <router-link to="/login">
    <img src="assets/shuffle.png" class="btn-switch-company"/>
      <buttonhut type="submit" caption="Switch Company" class="btn-switch-company"></buttonhut>
        
    </router-link>
    
    <a href="#" v-if="isLoggedIn" @click="logout">
      <button-logout type="submit" caption="Log out"></button-logout></a> 
  </nav>

</template>


<script>
  export default {
    name: 'navigation-bar-top', 
    methods:{
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
.navbar-top{
  text-align: right;
  display: block !important;
  padding: 0px !important;
  background-color: #FF3300;
}

.btn-switch-company{
    padding: 0;
    background-color: #FF3300;
    margin: 0px;
    border: 0px;
    color: white;
}
.search-position{
  right: 20px;
}
.btn-switch-company:hover{
    opacity: 0.5;
}
</style>
