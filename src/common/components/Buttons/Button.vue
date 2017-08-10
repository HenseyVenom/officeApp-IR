<template>
  <button v-on:click="click">
    {{ caption }}</button>
</template>

<script>
export default {
  props: ['caption'],
  name: 'my-button',
  methods: {
    click() {
      this.$emit('click');
    },
  },
};
</script>

<style>

</style>