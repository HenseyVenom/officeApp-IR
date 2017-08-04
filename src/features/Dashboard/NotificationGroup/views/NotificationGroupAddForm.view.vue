<template>
  <div class="containe2"> 
    <form class="form-control bord">
      <legend>Add group</legend>
      <label>Name</label>
      <input-panel></input-panel>
      <input-search type="search" name="search" placeholder="Search"></input-search>
      <br/>
      <buttonhut class="btn btn-sm btn-success" caption="Save"></buttonhut>
      <buttonhut class="btn btn-sm" caption="Cancel"></buttonhut>
    </form>
  </div>
</template>


<script>
export default {
  name: 'notificationgroupaddform',
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
