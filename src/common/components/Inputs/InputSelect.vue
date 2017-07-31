<template>
    <select id="select" name="select" class="form-control form-border">
        <option>{{ option0 }}</option>
        <option>{{ option1 }}</option>
        <option>{{ option2 }}</option>
        <option>{{ option3 }}</option>
    </select>
</template>

<script>
export default {
    name: 'input-select',
    data: () => {
        return {
            option0: '',
            option1: 'guest',
            option2: 'employer',
            option3: 'employee'
        };
    },
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