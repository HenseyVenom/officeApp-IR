<template>

  <div class="tool-bar">
    <router-link to="/login"><tool-item></tool-item></router-link>
    <tool-item></tool-item>
    <tool-item></tool-item>
    <tool-item></tool-item>
    <tool-item></tool-item>
    <tool-item></tool-item>
    <tool-item></tool-item>
  </div>
  
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
    name: 'tool-bar', 
  };
</script>

<style>
.tool-bar{
  display: block !important;
  padding:5px;
  margin:0px;
  background-color: #222d32;
  color: white;
}
</style>
