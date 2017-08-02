<template>
  <h2 class="form-signin-heading">{{ caption }}</h2>
</template>

<script>
  export default {
    props: ['caption'],
    name: 'login-header',
  };
</script>

<style>
  .form-signin-heading{
    margin-top: 30px;
    margin-bottom:30px;
    text-align: center;
  }
</style>
