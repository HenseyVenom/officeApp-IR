<template>
  <input type="text" class="form-box form-control" v-model="internalModel" v-on:input="change" />
</template>

<script>
  export default {
    name: 'input-search',
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
.form-box{
  width: 280px !important;
  display: inline !important;
  height: 30px;
}
.form-control:focus {
  color: #464a4c;
  background-color: #fff;
  border-color:#FF3300 !important;
  outline: none;
}
</style>
