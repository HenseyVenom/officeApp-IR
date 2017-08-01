<template>
<div class="containe2">
  <login-header caption="Create new record"/>
  <form class="form-control bord">   
    <label>Name</label>  
    <input-loginpanel></input-loginpanel>
    <label>Surname</label>  
    <input-loginpanel></input-loginpanel>
    <label>E-mail</label>  
    <input-loginpanel></input-loginpanel>
    <label>Role</label>  
    <input-select option="iza"></input-select>
    <input-checkbox caption="Accepted"></input-checkbox>
    <input-checkbox caption="Enable" checked></input-checkbox>
    <label>Description</label>  
    <input-loginpanel></input-loginpanel>
    <label>Phone</label>  
    <input-loginpanel></input-loginpanel>
    <label>Position</label>  
    <input-loginpanel></input-loginpanel>
    <label>Office</label>  
    <input-select></input-select>
</form>
</div>
  
</template>


<script>
  export default {
    name: 'useraddform', 
    data: () => {
        return {
            option0: '',
            option1: 'test1',
            option2: 'test2',
            option3: 'test3'
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