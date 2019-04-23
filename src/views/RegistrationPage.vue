<template>
    <div>
        <Background/>
        <div class="context">
            <h2><span class="brand-light">soft</span><span class="brand-medium">test</span></h2>
            <h1>Sign Up</h1>
            <div id="registration">
                <b-form @submit.prevent='onSubmitForm' ref="form">
                    <b-form-group id="usernameFormGroup">
                        <label for="range-1">Username:</label>
                        <b-form-input
                                id="username"
                                type="text"
                                placeholder="Enter username"
                                v-model="userName"
                                :class="{'is-invalid':$v.userName.$error}"
                                @blur="$v.userName.$touch()"
                                size="sm"
                        ></b-form-input>
                        <div class="invalid-feedback" v-if="!$v.userName.required">Username field is required</div>
                        <div class="invalid-feedback" v-if="!$v.userName.minLength">Field must have at least {{
                            $v.userName.$params.minLength.min }} characters.
                        </div>
                        <!--                        <div class="invalid-feedback" v-if="!$v.userName.uniqueUsername">-->
                        <!--                            This username is already exists.-->
                        <!--                        </div>-->
                    </b-form-group>
                    <!--                    <b-form-group id="nameInputGroup">-->
                    <!--                        <div class="row-signin">-->
                    <!--                            <div style="flex-grow: 1; margin-right: 0.5rem;">-->
                    <!--                                <label for="range-1">First name:</label>-->
                    <!--                                <b-form-input-->
                    <!--                                        id="userFirstName"-->
                    <!--                                        type="text"-->
                    <!--                                        required-->
                    <!--                                        placeholder="Enter your name"-->
                    <!--                                        v-model="userFirstName"-->
                    <!--                                        size="sm"-->
                    <!--                                ></b-form-input>-->
                    <!--                            </div>-->
                    <!--                            <div style="flex-grow: 1; margin-left: 0.5rem;">-->
                    <!--                                <label for="range-1">Last name:</label>-->
                    <!--                                <b-form-input-->
                    <!--                                        id="userLastName"-->
                    <!--                                        type="text"-->
                    <!--                                        required-->
                    <!--                                        placeholder="Enter your last name"-->
                    <!--                                        v-model="userLastName"-->
                    <!--                                        size="sm"-->
                    <!--                                ></b-form-input>-->
                    <!--                            </div>-->
                    <!--                        </div>-->
                    <!--                    </b-form-group>-->
                    <b-form-group id="emailInputGroup">
                        <label for="range-1">Email:</label>
                        <b-form-input
                                id="userEmail"
                                type="email"
                                placeholder="Enter your email"
                                v-model="userEmail"
                                :class="{'is-invalid':$v.userEmail.$error}"
                                @blur="$v.userEmail.$touch()"
                                size="sm"
                        ></b-form-input>
                        <div class="invalid-feedback" v-if="!$v.userEmail.required">Email field is required</div>
                        <div class="invalid-feedback" v-if="!$v.userEmail.email">This field should be an email</div>
                    </b-form-group>
                    <b-form-group id="passwordInputGroup">
                        <div class="row-signin">
                            <div style="flex-grow: 1; margin-right: 0.5rem;">
                                <label for="range-1">Password:</label>
                                <b-form-input
                                        id="userPassword"
                                        type="text"
                                        placeholder="Enter password"
                                        size="sm"
                                        v-model="userPassword"
                                        @blur="$v.userPassword.$touch()"
                                        :class="{'is-invalid':$v.userPassword.$error}"

                                ></b-form-input>
                                <div class="invalid-feedback" v-if="!$v.userPassword.mustUpperCase">
                                    Your password must contain upper case letters
                                </div>
                                <div class="invalid-feedback" v-if="!$v.userPassword.minLength">
                                    Minimal length of password is {{$v.userPassword.$params.minLength.min}}. Now it
                                    is
                                    {{userPassword.length}}.
                                </div>
                                <div class="invalid-feedback" v-if="!$v.userPassword.required">
                                    Password field is required.
                                </div>

                            </div>
                            <div style="flex-grow: 1; margin-left: 0.5rem;">
                                <label for="range-1">Confirm password:</label>
                                <b-form-input
                                        id="userConfirmPassword"
                                        type="text"
                                        required
                                        placeholder="Confirm password"
                                        size="sm"
                                        v-model="userConfirmPassword"
                                        @blur="$v.userConfirmPassword.$touch()"
                                        :class="{'is-invalid':$v.userConfirmPassword.$error}"
                                ></b-form-input>
                                <div class="invalid-feedback" v-if="!$v.userConfirmPassword.sameAs">
                                    Password should match.
                                </div>
                                <div class="invalid-feedback" v-if="!$v.userConfirmPassword.required">
                                    Password field is required.
                                </div>
                            </div>
                        </div>
                    </b-form-group>
                    <div class="row-signin" style="justify-content: center;">
                        <b-button id="submit-btn"
                                  type="submit"
                                  variant="primary"
                                  :disabled="$v.$invalid"
                        >Submit
                        </b-button>
                        <b-button id="reset-btn" type="reset" variant="danger">Reset</b-button>
                    </div>
                </b-form>
            </div>
        </div>
    </div>

</template>

<script>
    import {required, email, minLength, sameAs, helpers} from 'vuelidate/lib/validators'
    import Background from '../components/Backgrounds/SignUpBackground'
    import {BASE} from "../vue-axios/axios-conf"

    const mustUpperCase = (value) => !helpers.req(value) || /(?=.*[A-Z])/.test(value);

    export default {
        name: 'Registration',
        components: {Background},
        data() {
            return {
                userName: '',
                userEmail: '',
                userPassword: '',
                userConfirmPassword: '',
            }
        },
        methods: {
            onSubmitForm() {
                const userData = {
                    username: this.userName,
                    email: this.userEmail,
                    password1: this.userPassword,
                    password2: this.userConfirmPassword,
                };
                BASE.post('api/auth/registration/', userData)
                    .then(() => {
                        this.$awn.success('Successful registration.');
                        setTimeout(() => {
                            this.$router.replace(this.$route.query.redirect || '/resume')
                        }, 2000)
                    })
                    .catch((error) => {
                        if (error.response === undefined) {
                            this.$awn.alert('Server temporarily unavailable');
                        } else if (error.response.status === 400) {
                            this.$awn.alert('This username is already exists.');
                        } else
                            this.$awn.info(error.response.data.message);
                    });
            }
        },
        validations: {
            userName: {
                required,
                minLength: minLength(8),
            },
            userEmail: {
                required,
                email,

            },
            userPassword: {
                required,
                mustUpperCase,
                minLength: minLength(8),
            },
            userConfirmPassword: {
                required,
                sameAs: sameAs('userPassword')
            }
        },
    }
</script>
<style scoped src="../assets/css/registration.css">

</style>

