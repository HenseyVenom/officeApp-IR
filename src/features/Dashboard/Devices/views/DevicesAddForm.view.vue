<template>
  <div class="containe2">
    <form class="form-control bord">
      <legend>Add device</legend>
      <label>Number</label>
      <input-panel type="number"></input-panel>
      <input-checkbox caption="Enable" v-model="level.enable"></input-checkbox>
      <my-button class="btn btn-sm btn-block btn-success " caption="Save"></my-button>
      <my-button class="btn btn-sm btn-block btn-danger" caption="Cancel"></my-button>
    </form>
  </div>
</template>


<script>
export default {
  name: 'devicesaddform',
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