<template>
  <div class="containe2"> 
    <form class="form-control bord">
      <legend>Add device</legend>
      <label>Number</label>
      <input-panel type="number"></input-panel>
      <input-checkbox caption="Enable" v-model="level.enable"></input-checkbox>
      <buttonhut class="btn btn-sm btn-success" caption="Save"></buttonhut>
      <buttonhut class="btn btn-sm btn-danger" caption="Cancel"></buttonhut>
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
.containe2{
    padding: 10px;
    margin-top: 50px;
    margin-right: 30%;
    margin-left: 30%;
}
.bord{
  border: 1px dashed #FF3300 !important;

}
</style>
