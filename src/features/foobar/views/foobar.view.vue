<template>
  <div>
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12">
        <navigation-bar></navigation-bar>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-sm-2 col-md-2 hidden-xs-down">
        <tool-bar></tool-bar>
      </div>
      <div class="col-xs-10 col-sm-9 col-md-10 hidden-xs-down work">
        <useraddform></useraddform>
      </div> 
    </div>
    
     
    
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

};

</script>

<style>
.container-fluid{
  padding: 0px !important;
  margin: 0px !important;
}
.work{
  backgroud-color: black !important ;
}
</style>
