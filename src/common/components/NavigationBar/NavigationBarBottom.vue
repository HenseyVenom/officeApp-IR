<template>

  <nav class="navbar navbar-bottom">
    <router-link to="/foo/userTable"><btn-navitem type="submit" caption="Users"></btn-navitem></router-link>
    <router-link to="/foo/alpha"><btn-navitem type="submit" caption="Offices"></btn-navitem></router-link>
    <router-link to="/foo/alpha"><btn-navitem type="submit" caption="Levels"></btn-navitem></router-link>
    <router-link to="/foo/alpha"><btn-navitem type="submit" caption="POIs"></btn-navitem></router-link>
    <router-link to="/foo/alpha"><btn-navitem type="submit" caption="Beacons"></btn-navitem></router-link>
    <router-link to="/foo/alpha"><btn-navitem type="submit" caption="Requests"></btn-navitem></router-link>
    <router-link to="/foo/alpha"><btn-navitem type="submit" caption="Requests topics"></btn-navitem></router-link>
    <router-link to="/foo/alpha"><btn-navitem type="submit" caption="Domains"></btn-navitem></router-link>
    <router-link to="/foo/alpha"><btn-navitem type="submit" caption="Devices"></btn-navitem></router-link>
    <router-link to="/foo/alpha"><btn-navitem type="submit" caption="Notification group"></btn-navitem></router-link>
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
    name: 'navigation-bar-bottom', 
  };
</script>

<style>
.navbar-bottom{
  text-align: center;
  display: block !important;
  padding: 10px !important;
  background-color: #303030;
}
</style>