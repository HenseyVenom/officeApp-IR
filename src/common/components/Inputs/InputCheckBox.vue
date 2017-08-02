 <template>
    <div id="test" class="form-check"> 
        <input type="checkbox" id="checkbox"  :checked="value" @change="change(!value)">
        <label for="checkbox">{{ caption }}</label>
    </div>
</template>

  <script>
export default {
    props: ['caption', 'value'],
    name: 'input-checkbox',
    methods: {
        change(value) {
            console.log(value)
            this.$emit('input', value);
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
