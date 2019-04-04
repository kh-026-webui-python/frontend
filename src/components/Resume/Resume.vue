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
        <div v-if="state === 'response'"
             class="alert"
             v-bind:class="[ hasError ? 'alert-danger' : 'alert-success']"
        >
            <p>
                Failure : {{ message }}
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
                state: 'init',
                hasError: false,
                message: '',
            }
        },
        methods: {
            handleFileUpload() {
                this.file = this.$refs.file.files[0];
                //console.log(this.file);
            },
            submitFile() {
                const vm = this;
                vm.sendRequest(); // if all okey send request
            },
            sendRequest() {
                const vm = this;

                let formData = new FormData();
                formData.append('file', vm.file);

                axios
                    .post('http://127.0.0.1:8000/api/upload_resume/',
                        formData,
                        {
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            }
                        }
                    )
                    .then(response => {
                        vm.setCompState('Success', false)
                    })
                    .catch(error => {
                        // console.log(error.response.data.error)
                        vm.setCompState(error.response.data.error, true)
                    });
            },
            setCompState: function (message, hasError) {
                const vm = this;
                vm.hasError = hasError;
                vm.message = message;
                vm.state = 'response';

                setTimeout(function () {
                    vm.state = 'init'
                }, 3000)
            }
        }
    }
</script>

<style scoped>

</style>