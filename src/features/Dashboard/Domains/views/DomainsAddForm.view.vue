<template>
  <div class="containe2"> 
    <form class="form-control bord">
      <legend>Add domain</legend>
      <label>Domain</label>
      <input-panel></input-panel>
      <input-checkbox caption="Enable" v-model="level.enable"></input-checkbox>
      <input-checkbox caption="Employee domain"></input-checkbox>
      <buttonhut class="btn btn-sm btn-success" caption="Save"></buttonhut>
      <buttonhut class="btn btn-sm btn-danger" caption="Cancel"></buttonhut>
    </form>
  </div>
</template>


<script>
export default {
  name: 'domainsaddform',
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
