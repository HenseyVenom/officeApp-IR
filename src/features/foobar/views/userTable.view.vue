<template>
<div class="containe"> 
<table class="table table-hover">
  <thead>
    <tr>
      <th>Id</th>
      <th>Imię</th>
      <th>Nazwisko</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Jan</td>
      <td>Kowalski</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jakub</td>
      <td>Nowak</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Janina</td>
      <td>Kowalska</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Ewa</td>
      <td>Nowak</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Tomasz</td>
      <td>Nowak</td>
    </tr>
  </tbody>
</table>
</div>

</template>


<script>
  export default {
    name: 'userTable', 
  };
</script>

<style>
.containe{
    text-align: center;
    padding: 50px;
    margin: 50px;
}
</style>
