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
      <input-checkbox caption="Enable" v-model="level.enable"></input-checkbox>
      <input-addfile content="Image"></input-addfile>
      <buttonhut class="btn btn-sm btn-success" caption="Save"></buttonhut>
      <buttonhut class="btn btn-sm" caption="Cancel"></buttonhut>
    </form>
  </div>
</template>


<script>
export default {
  name: 'officeaddform',
    data: () => {
    return {
      level: {
        enable: true,
      },
    }
  }
}
</script>

<style>

</style>
