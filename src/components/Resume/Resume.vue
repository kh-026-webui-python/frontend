<template>
    <div>


        <h1 class="display-2">
            You can also load your resume
        </h1>


        <div v-if="state === 'init'" class="input-group mb-3 container">
            <div class="input-group mb-3">
                <div class="custom-file">
                    <input type="file" class="custom-file-input" ref="file" id="inputGroupFile02"
                           v-on:change="handleFileUpload()">
                    <label class="custom-file-label" for="inputGroupFile02">Choose file</label>
                </div>
                <div class="input-group-append">
                    <span class="input-group-text" v-on:click="submitFile()">Upload</span>
                </div>
            </div>
        </div>


        <div v-if="state === 'success'" class="alert alert-success">
            <p>
                Success
            </p>
        </div>
        <div v-if="state === 'fail'" class="alert alert-danger">
            <p>
                Failure
            </p>

        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "Resume",
        data() {
            return {
                file: '',
                state: 'init'
            }
        },
        methods: {
            handleFileUpload() {
                this.file = this.$refs.file.files[0];
                console.log(this.file);
            },
            submitFile() {
                let formData = new FormData();
                formData.append('file', this.file);

                const vm = this;

                axios
                    .post('http://127.0.0.1:8000/api/upload_resume/',
                        formData,
                        {
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            }
                        },
                        {crossdomain: true}
                    )
                    .then(function () {

                    })
                    .catch(function (error) {
                        vm.state = 'fail';
                        console.log(error.response.data);
                        setTimeout(function () {
                            vm.state = 'init'
                        }, 1000);
                    });

            }
        }
    }
</script>

<style scoped>

</style>