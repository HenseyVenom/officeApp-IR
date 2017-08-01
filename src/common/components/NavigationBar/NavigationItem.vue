<template>
  <button class="btn-navitem" v-on:click="click">
    {{ caption }} 
  </button>
</template>

<script>
  export default {
    props: ['caption'],
    name: 'btn-navitem', 
    methods: {
      click() {
        this.$emit('click');
      },
    },
  };
</script>

<style>
.btn-navitem{
    width:160px;
    height: 40px;
    padding-top: 2px !important;
    padding-right: 1px;
    padding-left: 1px;
    padding-bottom: 1px;
    background-color: #303030;
    margin: 0px;
    border: 0px;
    border-top: 4px solid #FF3300;
    color: white;
}
.btn-navitem:hover{
    opacity: 0.5;
    border: 1px dashed #FF3300;
}
</style>