<template>
  <div> 
    <form class="form-control col-md-5">
      <legend>Add POIs</legend>
      <label>Name</label>
      <input-loginpanel></input-loginpanel>
      <label>Description</label>
      <input-loginpanel></input-loginpanel>
      <label>Office</label>
      <input-select v-bind:options="options2"></input-select>
      <label>Level</label>
      <input-select v-bind:options="options3"></input-select>
      <label>Beacon</label>
      <input-select v-bind:options="options4"></input-select>
      <label>Location X1</label>
      <input-loginpanel readonly></input-loginpanel>
      <label>Location Y1</label>
      <input-loginpanel readonly></input-loginpanel>
      <label>Location X2</label>
      <input-loginpanel aria-readonly="0"></input-loginpanel>
      <label>Location Y2</label>
      <input-loginpanel aria-readonly="0"></input-loginpanel>
      <label>Type</label>
      <input-select v-bind:options="options5"></input-select>
      <label>Kind</label>
      <input-select v-bind:options="options6"></input-select>
      <input-checkbox caption="Enable" checked></input-checkbox>
      <label>Device</label>
      <input-select v-bind:options="options7"></input-select>
      <buttonhut class="btn btn-sm btn-success" caption="Save"></buttonhut>
      <buttonhut class="btn btn-sm" caption="Cancel"></buttonhut>
    </form>
  </div>
</template>


<script>
export default {
  name: 'poisaddform',
  data: () => {
    return {
      options2: [
        '', 'test office1', 'test office2'
      ],
       options3: [
        '', 'test level'
      ],
      options4: [
        '', 'test beacon'
      ],
      options5: [
        '', 'Point', 'Square'
      ],
      options6: [
        '', 'Person', 'Room', 'Area', 'Printer'
      ],
      options7: [
        ''
      ]
    };
  }
}
</script>

<style>

</style>
