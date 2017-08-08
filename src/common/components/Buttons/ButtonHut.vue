<template>
  <button  v-on:click="click"> {{ caption }} </button>
</template>

<script>
  export default {
    props: ['caption'],
    name: 'buttonhut', 
    methods: {
      click() {
        this.$emit('click');
      },
    },
  };
</script>

<style>
</style>