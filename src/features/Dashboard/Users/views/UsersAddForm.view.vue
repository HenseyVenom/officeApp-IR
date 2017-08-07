<template>
  <div class="containe2">
    <form class="form-control bord">
      <legend>Add user</legend>
      <label>Name</label>
      <input-panel required="" v-on:change="(e) => this.user.name = e"></input-panel>
      <label>Surname</label>
      <input-panel required="" v-on:change="(e) => this.user.surname = e"></input-panel>
  
      <!-- <label>E-mail</label>
              <input-panel id="email" required="" v-on:change="(e) => this.user.email = e"></input-panel> -->
      <div class="column is-12">
        <label class="label">Name</label>
        <p class="control has-icon has-icon-right">
          <input id="name" class="form-control form-border" name="name" v-model="user.name" v-validate="'required|alpha'" :class="{'input': true, 'is-danger': errors.has('name') }" type="text" placeholder="Type name ..." />
          <i v-show="errors.has('name')" class="fa fa-warning"></i>
          <span v-show="errors.has('name')" class="help is-danger">{{ errors.first('name') }}</span>
        </p>
      </div>
  
      <div class="column is-12">
        <label class="label" for="email">Email</label>
        <p :class="{ 'control': true }">
          <input id="email" class="form-control form-border" v-validate="'required|email'" :class="{ 'input': true, 'is-danger': errors.has('email')}" name="email" type="text" placeholder="Type email ..." v-model="user.email" />
          <span v-show="errors.has('email')" class=" is-danger">{{ errors.first('email') }}</span>
        </p>
      </div>
  
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
        'Guest', 'Employer', 'Employee'
      ],
      options2: [
        'Office 1', 'Office 2', 'Office 3'
      ],
      user: {
        name: '',
        email: '',
      },
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
    },
  },
}
</script>
<style>
.containe2 {
  padding: 10px;
  margin-top: 50px;
  margin-right: 30%;
  margin-left: 30%;
}

.form-group {
  padding-left: 10px;
  padding-right: 10px;
}

.bord {
  border: 1px dashed #FF3300 !important;
}

.is-danger {
  color: red;
}

.form-control:focus {
  color: #464a4c;
  background-color: #fff;
  border-color: #FF3300 !important;
  outline: none;
}

.form-border {
  margin-bottom: 10px;
}
</style>