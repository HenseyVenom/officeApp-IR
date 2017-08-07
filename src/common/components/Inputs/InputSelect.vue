<template>
    <select id="select" name="select" class="form-control form-border">
        <option v-for="option in options" v-bind:key="option">
            {{ option }}
        </option>
    </select>
</template>

<script>
export default {
    props: ['options'],
    name: 'input-select',
    methods: {
        change() {
            this.$emit('change', this.internalModel);
        },
    },
};
</script>

<style>
.form-control:focus {
    color: #464a4c;
    background-color: #fff;
    border-color: #FF3300 !important;
    outline: none;
}
</style>