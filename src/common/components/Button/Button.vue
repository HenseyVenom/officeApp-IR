<template>
  <button class="btn btn-block btn-lg btn-hut" v-on:click="click"> {{ caption }} </button>
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
.btn-hut {
  background-color: orange;
  
}
</style>
