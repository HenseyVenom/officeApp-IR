<template>
<div>
  <form class="form-control col-md-5">
    <label>Name</label>  
    <input-loginpanel></input-loginpanel>
    <label>Surname</label>  
    <input-loginpanel></input-loginpanel>
    <label>E-mail</label>  
    <input-loginpanel></input-loginpanel>
    <label>Role</label>  
    <input-select v-bind:options="options"></input-select>
    <input-checkbox caption="Accepted"></input-checkbox>
    <input-checkbox caption="Enable" checked></input-checkbox>
    <label>Description</label>  
    <input-loginpanel></input-loginpanel>
    <label>Phone</label>  
    <input-loginpanel></input-loginpanel>
    <label>Position</label>  
    <input-loginpanel></input-loginpanel>
    <label>Office</label>  
    <input-select v-bind:options="options2"></input-select>
</form>
</div>
  
</template>


<script>
  export default {
    name: 'useraddform', 
    data: () => {
        return {
          options: [
          '', 'guest', 'employer', 'employee'
          ],
          options2: [
          '', 'test office1', 'test office2'
          ]
        };
  }
  }
</script>

<style>
</style>
