<template>
  <div>
    <form class="form-control col-md-5">
      <label>Name</label>
      <input-loginpanel></input-loginpanel>
      <label>Description</label>
      <input-loginpanel></input-loginpanel>
      <label>Office</label>  
      <input-select v-bind:options="options"></input-select>
      <label>Sort Order</label>
      <input-loginpanel></input-loginpanel>
      <input-checkbox caption="Enable" checked></input-checkbox>
      <input-addfile content="Base Map"></input-addfile>
      <input-addfile content="Detail Item Map"></input-addfile>
      <input-addfile content="Area Map"></input-addfile>
    </form>
  </div>
</template>


<script>
export default {
  name: 'leveladdform',
  data: () => {
    return {
      options: [
        '', 'Test office1', 'Test office2'
      ]
    };
  }
}
</script>

<style>

</style>
