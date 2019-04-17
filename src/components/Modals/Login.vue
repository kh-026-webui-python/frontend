<template>
    <b-modal ref="login-modal" id="login-modal" title="Log in" hide-header-close size="sm" style="color: #463853;">
        <div id="login-container">
            <b-form>
                <b-form-group
                        id="fieldset-1"
                        style="margin-bottom: 0; "
                >
                    <label for="range-1">Username:</label>
                    <b-form-input class="login-input" id="username-input" v-model="username"
                                  placeholder="Enter your username"></b-form-input>
                    <label for="range-1">Password:</label>
                    <b-form-input class="login-input" id="password-input" v-model="password"
                                  placeholder="Enter your password" type="password"></b-form-input>
                </b-form-group>
            </b-form>
            <p>New to SofTest?
                <router-link to="/registration" v-b-tooltip title="Open registration">Sign Up</router-link>
            </p>
            <div class="alert alert-danger" v-if="error">{{ error }}</div>
        </div>
        <div slot="modal-footer" class="login-footer">
            <b-button
                    id="login-btn"
                    variant="primary"
                    size="sm"
                    class="login-button"
                    @click="login"
            >
                Log in
            </b-button>
            <b-button
                    id="close-btn"
                    variant="primary"
                    size="sm"
                    class="login-button"
                    @click="hideModal"
            >
                Close
            </b-button>
        </div>

    </b-modal>
</template>

<script>
    import {BASE} from "../../vue-axios/axios-conf";

    export default {
        name: 'Login',
        data() {
            return {
                username: '',
                password: '',
                error: ''
            }
        },
        methods: {
            hideModal() {
                this.$refs['login-modal'].hide()
            },
            login(){
            BASE.post('/api/auth/login/', { username: this.username, password: this.password })
                    .then(request => this.loginSuccessful(request))
                    .catch(() => this.loginFailed())

            },
            loginSuccessful (req) {
                if (!req.data.key) {
                    this.loginFailed()
                    return
                }

                localStorage.token = req.data.key
                this.error = false

                this.$router.replace(this.$route.query.redirect || '/resume')
            },

            loginFailed () {
                this.error = 'Login failed!'
                delete localStorage.token
            }
        }
    }
</script>

<style scoped>
    a {
        color: #673b91;
    }

    a:hover {
        color: #673b91;
    }

    p {
        font-family: MuseoSansRegular;
        margin: 0;
        text-align: center;
        font-size: 0.9rem;
    }

    .login-input {
        padding: 2px 10px;;
        background-color: white;
        border: 1px solid #ced4da;
        font-size: 0.9rem;
        font-family: MuseoSansRegular;
    }

    .login-footer {
        display: flex;
        width: fit-content;
        margin: 0 auto;
    }

    .login-button {
        margin: 0 0.5rem;
        width: 5rem;
    }

    #login-modal {

        z-index: 99;
    }

    #login-container {
        text-align: left;
        max-width: 20rem;
        color: rgb(153, 141, 160);
    }

    #login-btn {
        border-color: #6e3e9b;
        background-color: #6e3e9b;
    }

    #close-btn {
        color: #6e3e9b;
        border-width: 0;
        background-color: white;
    }

    #login-btn:hover {
        border-color: #673b91;
        background-color: #673b91;

    }

    #close-btn:hover {
        color: white;
        border-color: #673b91;
        background-color: #673b91;
    }
</style>