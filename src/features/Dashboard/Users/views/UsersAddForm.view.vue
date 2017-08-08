<template>
  <div class="containe2">
    <form class="form-control bord">
      <legend>Add user</legend>
      <label>Name</label>
      <input-panel id="name" v-on:change="(e) => this.user.name = e"></input-panel>
      <label>Surname</label>
      <input-panel id="surname" v-on:change="(e) => this.user.surname = e"></input-panel>
      <label>E-mail</label>
      <input-panel id="email" v-on:change="(e) => this.user.email = e"></input-panel>
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
      <buttonhut class="btn btn-sm btn-success" caption="Save" @click="addUser"></buttonhut>
      <buttonhut class="btn btn-sm btn-danger" caption="Cancel" @click="cancel"></buttonhut>
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
    addUser() {
      this.$store.dispatch('ADD_NEW_USER', this.user).then((response) => {
        this.$router.push('/dashboard/userslist');
      });
    },
    cancel() {
      this.$router.push('/dashboard/userslist');
    }
  }
}
</script>
<style>
.containe2 {
  padding: 10px;
  margin-top: 50px;
  margin-right: 30%;
  margin-left: 30%;
}

.bord {
  border: 1px dashed #FF3300 !important;
}
</style>