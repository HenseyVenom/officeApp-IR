<template>
  <div class="containe2">
    <form class="form-control bord">
      <legend>Add POIs</legend>
      <label>Name</label>
      <input-panel></input-panel>
      <label>Description</label>
      <input-panel></input-panel>
      <label>Office</label>
      <input-select v-bind:options="options2"></input-select>
      <label>Level</label>
      <input-select v-bind:options="options3"></input-select>
      <label>Beacon</label>
      <input-select v-bind:options="options4"></input-select>
      <label>Location X1</label>
      <input-panel readonly></input-panel>
      <label>Location Y1</label>
      <input-panel readonly></input-panel>
      <label>Location X2</label>
      <input-panel aria-readonly="0"></input-panel>
      <label>Location Y2</label>
      <input-panel aria-readonly="0"></input-panel>
      <label>Type</label>
      <input-select v-bind:options="options5"></input-select>
      <label>Kind</label>
      <input-select v-bind:options="options6"></input-select>
      <input-checkbox caption="Enable" v-model="level.enable"></input-checkbox>
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
