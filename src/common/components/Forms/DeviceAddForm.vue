<template>
  <div> 
    <form class="form-control col-md-5">
      <legend>Add device</legend>
      <label>Number</label>
      <input-panel type="number"></input-panel>
      <input-checkbox caption="Enable" v-model="level.enable"></input-checkbox>
      <buttonhut class="btn btn-sm btn-success" caption="Save"></buttonhut>
      <buttonhut class="btn btn-sm" caption="Cancel"></buttonhut>
    </form>
  </div>
</template>


<script>
export default {
  name: 'deviceaddform',
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
