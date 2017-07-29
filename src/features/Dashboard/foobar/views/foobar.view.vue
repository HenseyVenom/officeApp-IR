<template>

    <nav class="navbar">
       <router-link to="/login"><button-logout type="submit" caption="Log out"></button-logout></router-link>
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

};

</script>

<style>
.navbar{
  background-color: #FC4F29;
  padding:0px !important;
}
</style>
