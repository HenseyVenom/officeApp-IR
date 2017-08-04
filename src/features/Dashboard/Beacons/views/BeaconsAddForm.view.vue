<template>
  <div class="containe2">
    <form class="form-control bord">
      <legend>Add beacon</legend>
      <label>Name</label>
      <input-panel></input-panel>
      <label>Description</label>
      <input-panel></input-panel>
      <label>Office</label>
      <input-select v-bind:options="options2"></input-select>
      <label>Level</label>
      <input-select v-bind:options="options3"></input-select>
      <label>POI</label>
      <input-select v-bind:options="options4"></input-select>
      <label>Latitude</label>
      <input-panel readonly></input-panel>
      <label>Longitude</label>
      <input-panel readonly></input-panel>
      <label>Minor</label>
      <input-panel></input-panel>
      <label>Major</label>
      <input-panel></input-panel>
      <label>Uuid</label>
      <input-panel>A2F03D89-7094-4FF9-924E-E9524F52914B</input-panel>
      <input-checkbox caption="Enable" v-model="level.enable"></input-checkbox>
      <buttonhut class="btn btn-sm btn-success" caption="Save"></buttonhut>
      <buttonhut class="btn btn-sm" caption="Cancel"></buttonhut>
    </form>
  </div>
</template>


<script>
export default {
  name: 'beaconsaddform',
  data: () => {
    return {
       level: {
        enable: true,
      },
      options2: [
        '', 'test office1', 'test office2'
      ],
      options3: [
        '', 'test level'
      ],
      options4: [
        '', 'test Room', 'test Area', 'Test person'
      ]
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