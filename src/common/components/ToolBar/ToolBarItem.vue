<template>
  <div class="tool-item" v-on:click="click"><img src="assets/mouse-arrow.png"/> Users</div>
</template>

<script>
  export default {
    name: 'tool-item', 
    methods: {
      click() {
        this.$emit('click');
      },
    },
  };
</script>

<style>
.tool-item{
    height: 40px;
    padding: 8px;
    background-color: #222d32;
    margin-top: 10px;
    margin-bottom: 10px;
    border-left: 5px solid #FF3300;
    color: white;
}
.tool-item:hover{
    opacity: 0.5;
}
</style>