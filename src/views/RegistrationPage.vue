<template>
    <div>
        <Background/>
        <div class="context">
            <h2><span class="brand-light">soft</span><span class="brand-medium">test</span></h2>
            <h1>Sign Up</h1>
            <div id="registration">
                <b-form>
                    <label for="range-1">Username:</label>
                    <b-form-input
                            id="username-input"
                            type="text"
                            required
                            placeholder="Enter username"
                            size="sm"
                    ></b-form-input>
                    <div class="row-signin">
                        <div style="flex-grow: 1; margin-right: 0.5rem;">
                            <label for="range-1">First name:</label>
                            <b-form-input
                                    id="first-name-input"
                                    type="text"
                                    required
                                    placeholder="Enter your name"
                                    size="sm"
                            ></b-form-input>
                        </div>
                        <div style="flex-grow: 1; margin-left: 0.5rem;">
                            <label for="range-1">Last name:</label>
                            <b-form-input
                                    id="last-name-input"
                                    type="text"
                                    required
                                    placeholder="Enter your last name"
                                    size="sm"
                            ></b-form-input>
                        </div>
                    </div>
                    <label for="range-1">Email:</label>
                    <b-form-input
                            id="email-input"
                            type="email"
                            required
                            placeholder="Enter your email"
                            size="sm"
                    ></b-form-input>
                    <div class="row-signin">
                        <div style="flex-grow: 1; margin-right: 0.5rem;">
                            <label for="range-1">Password:</label>
                            <b-form-input
                                    id="password-input"
                                    type="password"
                                    required
                                    placeholder="Enter password"
                                    size="sm"
                            ></b-form-input>
                        </div>
                        <div style="flex-grow: 1; margin-left: 0.5rem;">
                            <label for="range-1">Confirm password:</label>
                            <b-form-input
                                    id="confirm-password-input"
                                    type="password"
                                    required
                                    placeholder="Confirm password"
                                    size="sm"
                            ></b-form-input>
                        </div>

                    </div>
                    <div class="row-signin" style="justify-content: center;">
                        <b-button id="submit-btn" type="submit" variant="primary">Submit</b-button>
                        <b-button id="reset-btn" type="reset" variant="danger">Reset</b-button>
                    </div>
                </b-form>
            </div>
        </div>
    </div>

</template>

<script>
    import Background from '../components/Backgrounds/SignUpBackground'
    export default {
        name: 'Registration',
        components:{ Background }
    }
</script>
<style scoped src="../assets/css/registration.css">

</style>

