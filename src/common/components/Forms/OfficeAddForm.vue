<template>
<div>
  <form class="form-control col-md-5">
    <legend>Add office</legend>
    <label>Name</label>  
    <input-loginpanel></input-loginpanel>
    <label>Description</label>  
    <input-loginpanel></input-loginpanel>
    <label>Location</label>  
    <input-loginpanel></input-loginpanel>
    <input-checkbox caption="Enable" checked></input-checkbox>
    <input-addfile content="Image"></input-addfile>
</form>
</div>
  
</template>


<script>
  export default {
    name: 'officeaddform', 
 
  }
</script>

<style>
</style>
