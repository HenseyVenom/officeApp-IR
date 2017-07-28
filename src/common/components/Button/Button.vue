<template>
  <button class="btn btn-primary btn-lg btn-block btn-hut btn-hut-iza" v-on:click="click"> {{ caption }} </button>
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
