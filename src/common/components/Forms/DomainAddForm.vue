<template>
  <div> 
    <form class="form-control col-md-5">
      <legend>Add domain</legend>
      <label>Domain</label>
      <input-loginpanel></input-loginpanel>
      <input-checkbox caption="Enable" v-model="level.enable"></input-checkbox>
      <input-checkbox caption="Employee domain"></input-checkbox>
      <buttonhut class="btn btn-sm btn-success" caption="Save"></buttonhut>
      <buttonhut class="btn btn-sm" caption="Cancel"></buttonhut>
    </form>
  </div>
</template>


<script>
export default {
  name: 'domainaddform',
  data: () => {
    return {
      level: {
        enable: true,
      },
    };
  }
}
</script>

<style>

</style>
