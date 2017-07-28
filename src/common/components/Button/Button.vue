<template>
  <button class="btn btn-primary btn-lg btn-block btn-hut btn-hut-robert" v-on:click="click"> {{ caption }} </button>
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
