<template>
  <button class="btn-switch-company" v-on:click="click">
    <!-- <img src="${require(`assets/shuffle.png`)}"/> -->
    <img src="assets/shuffle.png" /> {{ caption }}
  </button>
</template>

<script>
export default {
  props: ['caption'],
  name: 'button-switch-company',
  methods: {
    click() {
      this.$emit('click');
    },
  },
};
</script>

<style>
.btn-switch-company {
  padding: 10px;
  background-color: #FF3300;
  margin: 0px;
  border: 0px;
  color: white;
}

.btn-switch-company:hover {
  opacity: 0.5;
}
</style>