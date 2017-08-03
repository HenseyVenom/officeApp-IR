<template>

  <nav class="navbar navbar-top">
    <input-search type="search" name="search" placeholder="Search" required="" autofocus="" /> 
    <router-link to="/login"><button-switch-company type="submit" caption="Switch Company"></button-switch-company></router-link>
    <!--<router-link ><button-logout type="submit" caption="Log out" v-if="isLoggedIn" @click="logout"></button-logout></router-link>-->
    <a href="#" v-if="isLoggedIn" @click="logout"><button-logout type="submit" caption="Log out"></button-logout></a> 
  </nav>


  
  <!--
  <div>
    <hr/> This is navigation:
    <div style="height: 50px; background-color: yellow; color: hotpink; margin: 20px;">
      <router-link to="/foo/alpha">Alpha</router-link>
      <router-link to="/foo/bravo">Bravo</router-link>
      |
      <router-link to="/login">Logout</router-link>
    </div>
    <hr/>
    This is content:
    <router-view></router-view>
  </div> -->
  

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
</style>
