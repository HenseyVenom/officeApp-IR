<template>
  <div>
    <form class="form-control col-md-5">
      <legend>Add beacon</legend>
      <label>Name</label>
      <input-loginpanel></input-loginpanel>
      <label>Description</label>
      <input-loginpanel></input-loginpanel>
      <label>Office</label>
      <input-select v-bind:options="options2"></input-select>
      <label>Level</label>
      <input-select v-bind:options="options3"></input-select>
      <label>POI</label>
      <input-select v-bind:options="options4"></input-select>
      <label>Latitude</label>
      <input-loginpanel readonly></input-loginpanel>
      <label>Longitude</label>
      <input-loginpanel readonly></input-loginpanel>
      <label>Minor</label>
      <input-loginpanel></input-loginpanel>
      <label>Major</label>
      <input-loginpanel></input-loginpanel>
      <label>Uuid</label>
      <input-loginpanel>A2F03D89-7094-4FF9-924E-E9524F52914B</input-loginpanel>
      <input-checkbox caption="Enable" v-model="level.enable"></input-checkbox>
      <buttonhut class="btn btn-sm btn-success" caption="Save"></buttonhut>
      <buttonhut class="btn btn-sm" caption="Cancel"></buttonhut>
    </form>
  </div>
</template>


<script>
export default {
  name: 'beaconaddform',
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

</style>
