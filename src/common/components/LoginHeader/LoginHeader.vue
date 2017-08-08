<template>
  <h1 class="form-signin-heading">
    {{ caption }}</h1>
</template>

<script>
export default {
  props: ['caption'],
  name: 'login-header',
};
</script>

<style>
.form-signin-heading {
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>
