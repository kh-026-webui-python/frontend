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
                Request error:
            </p>
            <p>
                {{ error }}
            </p>
        </div>
        <div v-if="state === 'nofile'" class="alert alert-danger">
            <p>
                There is no file
            </p>
        </div>
        <div v-if="state === 'bigfile'" class="alert alert-danger">
            <p>
                File is too big
            </p>
        </div>
        <div v-if="state === 'badfiletype'" class="alert alert-danger">
            <p>
                Resume must be in pdf format.
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
                error: '',
            }
        },
        methods: {
            handleFileUpload() {
                this.file = this.$refs.file.files[0];
                //console.log(this.file);
            },
            submitFile() {
                const vm = this;

                if (window.File && window.FileReader && window.FileList && window.Blob) {
                    // Great success! All the File APIs are supported.
                } else {
                    alert('The File APIs are not fully supported in this browser.');
                }

                if (vm.file === '') { //check if user upload file in form
                    vm.setCompState(vm, 'nofile');
                } else //if (vm.file.size > 3145728) { //check if file has acceptable size (3mb)
                    //vm.setCompState(vm, 'bigfile');
                //} else
                //if (vm.file.type !== 'application/pdf') { //check if file is pdf
                //    vm.setCompState(vm, 'badfiletype');
                //} else
                {
                    vm.sendRequest(); // if all okey send request
                }


            },
            sendRequest() {
                const vm = this;

                let formData = new FormData();
                formData.append('file', this.file);

                axios
                    .post('http://127.0.0.1:8000/api/resume/',
                        formData,
                        {
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            }
                        }
                    )
                    .then(function () {
                        vm.setCompState(vm, 'success');
                    })
                    .catch(error => {
                        vm.error = error;
                        vm.setCompState(vm, 'fail')
                    });
            },
            setCompState: function (vm, state) {
                var states = ['fail', 'success', 'nofile', 'bigfile', 'badfiletype'];
                //console.log(state in states);
                if (states.includes(state)) {
                    vm.state = state;
                    setTimeout(function () {
                        vm.state = 'init';
                    }, 1000);
                } else {
                    throw new Error("State must be ['fail', 'success', 'nofile', 'bigfile', 'badfiletype']")
                }
            }
        }
    }
</script>

<style scoped>

</style>