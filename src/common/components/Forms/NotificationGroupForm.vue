<template>
  <div> 
    <form class="form-control col-md-5">
      <legend>Add group</legend>
      <label>Name</label>
      <input-loginpanel></input-loginpanel>
      <input-search type="search" name="search" placeholder="Search" class="offset-md-7"></input-search>
      <br/>
      <buttonhut class="btn btn-sm btn-success" caption="Save"></buttonhut>
      <buttonhut class="btn btn-sm" caption="Cancel"></buttonhut>
    </form>
  </div>
</template>


<script>
export default {
  name: 'notificationgroupform',
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

</style>
