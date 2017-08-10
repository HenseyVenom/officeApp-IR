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
      <!-- <datepicker-vue :readonly="true" format="YYYY-MM-DD" v-model="date"></datepicker-vue>  -->
      <q-datetime type="date"></q-datetime>
      <input-addfile content="Image"></input-addfile>
      <buttonhut class="btn btn-sm btn-success" caption="Save"></buttonhut>
      <buttonhut class="btn btn-sm btn-danger" caption="Cancel"></buttonhut>
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