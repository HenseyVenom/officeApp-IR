 <template>
    <div id="test" class="form-check">
        <input type="checkbox" id="checkbox" value="" v-model="checkedNames">
        <label for="checkbox">{{ checkedNames }}</label>
    
    </div>
</template>

  <script>
export default {
    name: 'input-checkbox',
    data: () => {
        return {
            checkedNames: 'iza'
        };
    },
    methods: {
        change() {
            this.$emit('change', this.internalModel)
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
    margin-bottom: 10px;
}
</style>
