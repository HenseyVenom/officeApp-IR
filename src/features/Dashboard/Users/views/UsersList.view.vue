<template>
  <div class="containe">
    <router-link to="/dashboard/useraddform" class="tools">
      <img src="assets/add.png" />
    </router-link>
    <table id="userTable" class="table table-hover">
      <thead class="table-title">
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Surname</th>
          <th>E-mail</th>
          <th>Role</th>
          <th>Accepted</th>
          <th>White</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody class="searchable">
        <tr v-for="user in users" v-bind:key="user.id">
          <td>{{user.id}}</td>
          <td>{{user.name}}</td>
          <td>{{user.surname}}</td>
          <td>{{user.email}}</td>
          <td>{{user.role}}</td>
          <td>{{user.accepted}}</td>
          <td>{{user.white}}</td>
          <td>
            <a v-on:click="deleteUser(user)">
              <img src="assets/cancel.png" />
            </a>
          </td>
          <td>
            <a v-on:click="editUser(user)">
              <img src="assets/edit.png" class="col-md-3" />
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// mapState is a helper function provided by vuex to simplify the creation of these objects. 
// The end result is exactly the same, feel free to use whatever is more comfortable.
import { mapState } from 'vuex';
export default {
  name: 'userslist',
  computed: mapState([
    'users'
  ]),
  mounted() {
    this.$store.dispatch('LOAD_USERS_LIST');
  },
  methods: {
    deleteUser(user) {
      this.users.splice(this.users.indexOf(user), 1);
    },
    updateUserProfile() {
      this.$store.dispatch('UPDATE_USER_PROFILE')
    }
  }
}
</script> 


<style>
.containe {
  text-align: center;
  padding-top: 5px;
  padding-left: 100px;
  padding-right: 100px;
  overflow: auto;
}


.table-title {
  background-color: #303030;
  color: white;
  ;
}

.tools {
  text-align: right;
  display: block !important;
  padding: 10px !important;
  background-color: white;
  color: black;
}
</style>