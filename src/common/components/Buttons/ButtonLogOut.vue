<template>
  <button class="btn-logout" v-on:click="click">
    <!-- <img src="${require(`icons/logout.png`)}"/> -->
    <img src="icons/logout.png"/>
    {{ caption }} 
  </button>
</template>

<script>
  export default {
    props: ['caption'],
    name: 'button-logout', 
    methods: {
      click() {
        this.$emit('click');
      },
    },
  };
</script>

<style>
.btn-logout{
    float: right;
    padding:10px;
    background-color:#FC4F29;
    margin: 0px;
    border: 0px;
    color: white;
    font-weight:bold;
}
.btn-logout:hover{
    opacity: 0.5;
}
</style>