<template>
  <button class="btn-logout" v-on:click="click">
    <!-- <img src="${require(`assets/logout.png`)}"/> -->
    <img src="assets/logout.png"/>
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
    padding: 10px;
    background-color: #FF3300;
    margin: 0px;
    border: 0px;
    color: white;
}
.btn-logout:hover{
    opacity: 0.5;
}
</style>