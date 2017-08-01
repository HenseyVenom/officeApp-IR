 <template>
    <div class="extra-space">
        <label for="addFile">{{ content }}</label>
        <br/>
        <input type="file" id="addFile" value="" class="form-control-file add-border">
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

.add-border {
    border: 1px solid #d3d3d3;
    outline: none;
    width: 100%;
}
</style>