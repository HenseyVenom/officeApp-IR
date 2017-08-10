<template>
  <div class="containe2">
    <form class="form-control bord">
      <legend>Add office</legend>
      <label>Name</label>
      <input-panel></input-panel>
      <label>Description</label>
      <input-panel></input-panel>
      <label>Location</label>
      <input-panel></input-panel>
      <input-checkbox caption="Enable" checked></input-checkbox>
      <input-addfile content="Image"></input-addfile>
      <my-button class="btn btn-sm btn-block btn-success " caption="Save"></my-button>
      <my-button class="btn btn-sm btn-block btn-danger" caption="Cancel"></my-button>
    </form>
  </div>
</template>


<script>
export default {
  name: 'officesaddform',
}
</script>

<style>
.containe2 {
  padding: 10px;
  margin-top: 50px;
  margin-right: 30%;
  margin-left: 30%;
}

.bord {
  border: 1px dashed #FF3300 !important;
}
</style>