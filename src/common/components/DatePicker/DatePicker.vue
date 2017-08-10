<template id="date-picker">
    <div>
        <input-panel class="datepicker-here" placeholder="Type date ..." data-language='en' @input="$emit('input', $event.target.value)" :value="date" v-date-picker/>
    </div>
</template>

<script>
import $ from 'jquery';
export default {
    name: 'date-picker',
    template: '#date-picker',
    props: {
        date: {
            default: '',
            type: String,
        },
    },
    directives: {
        datePicker: {
            bind(el, binding, vnode) {
                $(el).datepicker({
                    onSelect(val) {
                        vnode.context.$emit('input', val);
                    },
                });
            },
        },
    },

}
</script>

<style>

</style>
