<template>
  <div class="containe2"> 
    <form class="form-control bord">
      <legend>Add user</legend>
      <label>Name</label>
      <input-loginpanel id="name" v-on:change="(e) => this.user.name = e"></input-loginpanel>
      <label>Surname</label>
      <input-loginpanel id="surname" v-on:change="(e) => this.user.surname = e"></input-loginpanel>
      <label>E-mail</label>
      <input-loginpanel id="email" v-on:change="(e) => this.user.email = e"></input-loginpanel>
      <label>Role</label>
      <input-select id="role" v-bind:options="options"></input-select>
      <input-checkbox caption="Accepted"></input-checkbox>
      <input-checkbox caption="Enable" checked></input-checkbox>
      <label>Description</label>
      <input-loginpanel></input-loginpanel>
      <label>Phone</label>
      <input-loginpanel></input-loginpanel>
      <label>Position</label>
      <input-loginpanel></input-loginpanel>
      <label>Office</label>
      <input-select v-bind:options="options2"></input-select>
      <buttonhut class="btn btn-sm btn-success" caption="Save" @click="addUser"></buttonhut>
      <buttonhut class="btn btn-sm" caption="Cancel" @click="cancel"></buttonhut>
    </form>
  </div>
</template>

<script>
export default {
  name: 'usersaddform',
  data: () => {
    return {
      options: [
        '', 'guest', 'employer', 'employee'
      ],
      options2: [
        '', 'test office1', 'test office2'
      ],
      user: {},
    };
  },
  methods: {
    addUser () {
      this.$store.dispatch('ADD_NEW_USER',this.user)
    },
    cancel () {
      this.$router.push('/dashboard/userslist');
    }
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