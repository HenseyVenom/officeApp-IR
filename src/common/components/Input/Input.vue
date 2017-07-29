<template>
  <input class="form-control form-border" v-model="internalModel" v-on:input="change" />
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
.form-control:focus {
  color: #464a4c;
  background-color: #fff;
  border-color:#FF3300 !important;
  outline: none;
}
.form-border{
  margin-bottom:10px;
}
</style>
