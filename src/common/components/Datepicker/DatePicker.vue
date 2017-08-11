 <template>
   <input id="datepicker" />
   
</template>
<script> 
import $ from 'jquery';
import 'jquery-ui/ui/core';
import 'jquery-ui/ui/widgets/datepicker';
import 'jquery-ui/themes/base/datepicker.css';
import 'jquery-ui/themes/base/theme.css';



export default {
  name: 'date-picker',
  data: () => ({
     props: [ 'dateFormat' ],
  }),
  methods: {
    datepicker: $('#datepicker').datepicker(),
  },
  mounted: function() {
  var self = this;
  $(this.$el).datepicker({
    dateFormat: this.dateFormat,
    onSelect: function(date) {
      self.$emit('update-date', date);
    }
  });
  },
  beforeDestroy: function() {
    $(this.$el).datepicker('hide').datepicker('destroy');
  }
};

</script>

 <style scoped>

</style>