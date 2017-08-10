<template>
  <div class="containe2">
    <form class="form-control bord">
      <legend>It's simple datepicker</legend>
      <label>Select date</label>
      <br/>
      <date-picker :date="date" v-model="date"></date-picker>
      <p class="title">You have Selected: {{date}} </p>
      <my-button class="btn btn-sm btn-block btn-success " caption="Save"></my-button>
      <my-button class="btn btn-sm btn-block btn-danger" caption="Cancel"></my-button>
    </form>
  </div>
</template>


<script>
import { mapState } from 'vuex';
export default {
  name: 'notificationgroupaddform',
  data: () => {
    return {
      level: {
        enable: true,
      },
      date: '',
    };
  },
}
</script>

<style>
.containe2 {
  padding: 10px;
  margin-top: 50px;
  margin-right: 30%;
  margin-left: 30%;
}

.bord {
  border: 1px dashed #FF3300 !important;
}

.title {
  color: green;
  font-weight: bold;
}
</style>
