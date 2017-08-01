 <template>
    <div id="test" class="form-check">
        <label for="checkbox">{{ caption }}</label>
        <br/>
        <input type="checkbox" id="checkbox" value="">
    </div>
</template>

  <script>
export default {
    props: ['caption'],
    name: 'input-checkbox',
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
    margin-bottom: 10px;
}
</style>
