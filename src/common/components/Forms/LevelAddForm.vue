<template>
  <div>
    <form class="form-control col-md-5">
      <legend>Add level</legend>
      <label>Name</label>
      <input-panel></input-panel>
      <label>Description</label>
      <input-panel></input-panel>
      <label>Office</label>
      <input-select v-bind:options="options"></input-select>
      <label>Sort Order</label>
      <input-panel></input-panel>
      <input-checkbox caption="Enable" v-model="level.enable"></input-checkbox>
      <input-addfile content="Base Map"></input-addfile>
      <input-addfile content="Detail Item Map"></input-addfile>
      <input-addfile content="Area Map"></input-addfile>
      <buttonhut class="btn btn-sm btn-success" caption="Save"></buttonhut>
      <buttonhut class="btn btn-sm" caption="Cancel"></buttonhut>
    </form>
  
  </div>
</template>


<script>
export default {
  name: 'leveladdform',
  data: () => {
    return {
      level: {
        enable: true,
      },
      options: [
        '', 'Test office1', 'Test office2'
      ]
    };
  }
}
</script>

<style>

</style>
