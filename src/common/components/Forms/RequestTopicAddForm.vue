<template>
  <div> 
    <form class="form-control col-md-5">
      <legend>Add topic</legend>
      <label>Name (english)</label>
      <input-panel></input-panel>
      <label>Name (polski)</label>
      <input-panel></input-panel>
      <label>Name (français)</label>
      <input-panel></input-panel>
      <label>Name (svenska)</label>
      <input-panel></input-panel>
      <input-checkbox caption="Enable"  v-model="level.enable"></input-checkbox>
      <buttonhut class="btn btn-sm btn-success" caption="Save"></buttonhut>
      <buttonhut class="btn btn-sm" caption="Cancel"></buttonhut>
    </form>
  </div>
</template>


<script>
export default {
  name: 'requesttopicaddform',
  data: () => {
    return {
        level: {
        enable: true,
      },
      options: [
        '', 'guest', 'employer', 'employee'
      ],
      options2: [
        '', 'test office1', 'test office2'
      ]
    };
  }
}
</script>

<style>

</style>
