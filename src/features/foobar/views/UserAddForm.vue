<template>
    <div class="container-custom">
        <login-header caption="Create new record" />
        <form class="form-control border">
            <label>Name</label>
            <input-loginpanel></input-loginpanel>
            <label>Surname</label>
            <input-loginpanel></input-loginpanel>
            <label>E-mail</label>
            <input-loginpanel></input-loginpanel>
            <label>Role</label>
            <input-select v-bind:options="options"></input-select>
            <input-checkbox caption="Accepted"></input-checkbox>
            <input-checkbox caption="Enable" v-model="level.enable"></input-checkbox>
            <label>Description</label>
            <input-loginpanel></input-loginpanel>
            <label>Phone</label>
            <input-loginpanel></input-loginpanel>
            <label>Position</label>
            <input-loginpanel></input-loginpanel>
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
.container-custom {
    padding: 10px;
    margin-top: 50px;
    margin-right: 30%;
    margin-left: 30%;
}

.border {
    border: 1px dashed #FF3300 !important;
}
</style>
