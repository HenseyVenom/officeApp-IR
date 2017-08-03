<template>
  <div class="containe2"> 
    <form class="form-control bord">
     <label>Name</label>
            <input-panel></input-panel>
            <label>Surname</label>
            <input-panel></input-panel>
            <label>E-mail</label>
            <input-panel></input-panel>
            <label>Role</label>
            <input-select v-bind:options="options"></input-select>
            <input-checkbox caption="Accepted"></input-checkbox>
            <input-checkbox caption="Enable" v-model="level.enable"></input-checkbox>
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