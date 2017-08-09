<template>
    <p>
        Date:
        <input type="text" id="datepicker"></input>
    </p>
</template>

<script>
import jquery from 'jquery';
import jqueryui from 'jquery-ui';
$(document).ready(function () {
    (function ($) {
        $("#datepicker").datepicker();
    });
}(jQuery));

export default {
    props: ['caption'],
    name: 'date-picker',
    methods: {
        click() {
            this.$emit('click');
        },

    },
};
</script>

<style>

</style>