<template>
  <div class="containe2">
    <form class="form-control bord">
      <legend>Add topic</legend>
      <label>Name (english)</label>
      <input-panel></input-panel>
      <label>Name (polski)</label>
      <input-panel></input-panel>
      <label>Name (français)</label>
      <input-panel></input-panel>
      <label>Name (svenska)</label>
      <input-panel></input-panel>
      <input-checkbox caption="Enable" v-model="level.enable"></input-checkbox>
      <my-button class="btn btn-sm btn-block btn-success " caption="Save"></my-button>
      <my-button class="btn btn-sm btn-block btn-danger" caption="Cancel"></my-button>
    </form>
  </div>
</template>


<script>
export default {
  name: 'requeststopicsaddform',
  data: () => {
    return {
      level: {
        enable: true,
      },
      options: [
        '', 'guest', 'employer', 'employee'
      ],
      options2: [
        '', 'test office1', 'test office2'
      ]
    };
  }
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
</style>