<template>
  <input id="filter" type="text" class="form-box form-control">
</template>

<script>
export default {
  name: 'input-search',
}
$(document).ready(function () {
  (function ($) {
    $('#filter').keyup(function () {
      var rex = new RegExp($(this).val(), 'i');
      $('.searchable tr').hide();
      $('.searchable tr').filter(function () {
        return rex.test($(this).text());
      }).show();
    })
  }(jQuery));
});

</script>

<style>
.form-box {
  width: 280px !important;
  height: 30px !important;
  display: initial !important;
}

.form-control:focus {
  color: #464a4c;
  background-color: #fff;
  border-color: #FF3300 !important;
  outline: none;
}
</style>
