<template>

<div class="containe">
<router-link to="/foo/userAdd" class="tools"> <img src="assets/add.png"/></router-link>
<table class="table table-hover">
  <thead class="table-title">
    <tr>
	  <th>Id</th>
      <th>Name</th>
      <th>Surname</th>
	  <th>E-mail</th>
	  <th>Role</th>
	  <th>Accepted</th>
	  <th>White</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="user in users">
	  <td>{{user.id}}</td>
      <td>{{user.name}}</td>
	  <td>{{user.surname}}</td>
	  <td>{{user.email}}</td>
	  <td>{{user.role}}</td>
	  <td>{{user.accepted}}</td>
	  <td>{{user.white}}</td>
    </tr>
  </tbody>
</table>
</div>
</template>



 <script>

import axios from 'axios';
export default {
  name: 'userTable',
  data(){
    return {
      users: []
    }
  },
  methods: {
    getUsers: ()=>{
      axios.post(`http://localhost:4040/api/users`, {
		users: this.newUser,
      })
      .then(response => {
      })
      .catch(e => {
        console.log(e)
      })
    }
  },
  created(){
    axios.get(`http://localhost:4040/api/users`)
    .then(response => {
      this.users = response.data
    })
    .catch(e => {
      console.log(e)
    })
  }
};
</script>

      


<style>
.containe{
    text-align: center;
    padding: 50px;
    margin: 50px;
}
.table-title{
	background-color: #303030;
	color: white;;
}
.tools{
  text-align: right;
  display: block !important;
  padding: 10px !important;
  background-color: white;
  color: black;
}
</style>