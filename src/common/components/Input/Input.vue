<template>
  <input class="form-control" v-model="internalModel" v-on:input="change" />
</template>

<script>
  export default {
    name: 'inputhut',
    data: () => ({
      internalModel: '',
    }),
    methods: {
      change() {
        this.$emit('change', this.internalModel);
      },
    },
  };
</script>

<style>
  .form-control{
    margin-bottom:10px;
  }
</style>
