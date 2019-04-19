<template>
    <div class="main-container">
        <div class="content-allocation">
            <div class="registration-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 class="display-4">Registration of applicants</h1>
                <p class="lead">On this page you can download a .csv file with information about the applicants.
                    The system will create profiles for applicants using this information.</p>
            </div>
        </div>
        <b-form @submit.prevent='upload' @reset="reset">
            <div class="alert alert-warning alert-dismissible" v-show="showWarningAlert">
                <a href="#" class="close" data-dismiss="alert" aria-label="close"
                   v-on:click="showWarningAlert=false">&times;</a>
                The file must be in <strong>csv format</strong> and contain the following columns:
                <i>first name, last name, english level, birth date, location</i>
            </div>
            <b-form-file
                    ref="fileinput"
                    class="form"
                    v-model="file"
                    :state="Boolean(file)"
                    placeholder="Choose a file..."
                    drop-placeholder="Drop file here..."
                    accept=".csv"
                    v-on:change="showFileAlert=true"
            ></b-form-file>
            <div class="alert alert-dismissible"
                 v-bind:class="[file && (MIME.indexOf(file.type) != -1) ? 'alert-success' : 'alert-danger']"
                 v-show="showFileAlert"

            >
                <a href="#" class="close" data-dismiss="alert" aria-label="close"
                   v-on:click="showFileAlert=false">&times;</a>
                Selected file: <strong>{{ file ? file.name + '; Type:' + file.type : '' }}</strong>

            </div>

            <b-button-group>
                <b-button id="submit-button" type="submit" variant="primary">Upload</b-button>
                <b-button id="reset-button" type="reset" variant="outline-primary">Reset</b-button>
            </b-button-group>

        </b-form>

        <b-container>
            <div>
                <b-table hover :items="items" :fields="fields"></b-table>
            </div>
        </b-container>
    </div>
</template>

<script>
    import {BASE} from '../vue-axios/axios-conf'

    export default {
        name: "FileRegistration",
        items: [],
        computed: {
            fileAlert: function (file) {
                return file ? 'success' : 'danger';
            }
        },
        methods: {
            setItems: function (array) {
                for (let item of array) {
                    item['_rowVariant'] = "error" in item ? 'danger' : 'success'
                }
                this.items = array
            },
            upload: function () {
                let formData = new FormData();
                formData.append('csvfile', this.file, this.file.name);
                BASE.defaults.headers['Content-Type'] = 'multipart/form-data';
                let url = '/api/upload/' + 'csvfile';
                BASE
                    .post(url, formData)
                    .then(response => (

                        this.setItems(response.data)
                    ))
                    .catch(error => console.log(error));
            },
            reset() {
                this.$refs.fileinput.reset();
            }
        },
        data() {
            return {
                file: null,
                MIME: ["text/csv"],
                showFileAlert: false,
                showWarningAlert: true,
                items: this.items
            }
        }
    }
</script>

<style scoped src="../assets/css/applicants-registration.css">
</style>
