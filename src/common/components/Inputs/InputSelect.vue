<template>
    <select id="select" name="select" class="form-control form-border">
        <option>{{ options }}</option>
        <option>{{ options }}</option>
        <option>{{ options }}</option>
    </select>
</template>

<script>
export default {
    el: '#select',
    data: {
        internalModel: ['a', 'b', 'c']
    },
    name: 'input-select',
    data: () => ({
        internalModel: ''
    }),
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

.form-border {
    margin-bottom: 20px;
}
</style>