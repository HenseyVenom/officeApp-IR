<template>
  <button class="btn btn-hut " v-on:click="click"> {{ caption }} </button>
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
  color: #FFFFFF; 
  background-color: #FF3300; 
  border-color: #FFFFFF; 
} 
 
.btn-hut:hover, 
.btn-hut:focus, 
.btn-hut:active, 
.btn-hut.active, 
.open .dropdown-toggle.btn-hut { 
  color: #FFFFFF; 
  background-color: #FC4F29; 
  border-color: #FFFFFF; 
} 
 
.btn-hut:active, 
.btn-hut.active, 
.open .dropdown-toggle.btn-hut { 
  background-image: none; 
} 
 
.btn-hut.disabled, 
.btn-hut[disabled], 
fieldset[disabled] .btn-hut, 
.btn-hut.disabled:hover, 
.btn-hut[disabled]:hover, 
fieldset[disabled] .btn-hut:hover, 
.btn-hut.disabled:focus, 
.btn-hut[disabled]:focus, 
fieldset[disabled] .btn-hut:focus, 
.btn-hut.disabled:active, 
.btn-hut[disabled]:active, 
fieldset[disabled] .btn-hut:active, 
.btn-hut.disabled.active, 
.btn-hut[disabled].active, 
fieldset[disabled] .btn-hut.active { 
  background-color: #FF3300; 
  border-color: #FFFFFF; 
} 
 
.btn-hut .badge { 
  color: #FF3300; 
  background-color: #FFFFFF; 
}
</style>
