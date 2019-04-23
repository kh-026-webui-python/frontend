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
                {{ message }}
            </p>
        </div>
    </div>
</template>

<script>
    import {BASE} from "../vue-axios/axios-conf";

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
            },
            submitFile() {
                let formData = new FormData();
                formData.append('file', this.file);
                const vm = this;
                BASE.defaults.headers['Content-Type'] = 'multipart/form-data';
                BASE
                    .post('api/upload_resume/', formData)
                    .then(function (response) {
                        console.log(response);
                        vm.setCompState(response.data.info, false)

                    })
                    .catch(function (error) {
                        vm.setCompState(error.response.data.error, true)
                    });
            },
            setCompState: function (message, hasError) {
                const vm = this;
                vm.hasError = hasError;
                vm.message = hasError ? 'Error : ' + message : 'Success';
                vm.state = 'response';

                setTimeout(function () {
                    vm.state = 'init'
                }, 2000)
            }
        }
    }
</script>

<style scoped>
</style>