 <template>
    <div class="extra-space">
        <label for="addFile" >{{ content }}</label>
        <br/>
        <input type="file" id="addFile" value="" class="form-control-file">
    </div>
</template>

  <script>
export default {
    props: ['content'],
    name: 'input-addfile',
    methods: {
        change() {
            this.$emit('change', this.internalModel);
        },
    },
};
</script>

<style>
.extra-space {
    margin-top: 20px;
}
</style>