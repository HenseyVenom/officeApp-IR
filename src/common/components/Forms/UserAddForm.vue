<template>
  <div> 
    <form class="form-control col-md-5">
      <legend>Add user</legend>
      <label>Name</label>
      <input-panel></input-panel>
      <label>Surname</label>
      <input-panel></input-panel>
      <label>E-mail</label>
      <input-panel></input-panel>
      <label>Role</label>
      <input-select v-bind:options="options"></input-select>
      <input-checkbox caption="Accepted"></input-checkbox>
      <input-checkbox caption="Enable" checked></input-checkbox>
      <label>Description</label>
      <input-panel></input-panel>
      <label>Phone</label>
      <input-panel></input-panel>
      <label>Position</label>
      <input-panel></input-panel>
      <label>Office</label>
      <input-select v-bind:options="options2"></input-select>
      <buttonhut class="btn btn-sm btn-success" caption="Save"></buttonhut>
      <buttonhut class="btn btn-sm" caption="Cancel"></buttonhut>
    </form>
  </div>
</template>


<script>
export default {
  name: 'useraddform',
  data: () => {
    return {
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
