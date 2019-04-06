<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link class="havbar-brand" to="/">SoftTest</router-link>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link class="nav-link" to="/login">Login</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/registration">Registration</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/resume">Resume</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/file_registration">Registration by file</router-link>
                </li>
            </ul>
            <HealthCheckComponent/>
        </div>
    </nav>
</template>

<script>
    import HealthCheckComponent from '../../components/HealthCheck/HealthCheckComponent'

    export default {
        name: "NavigationBar",
        components: {HealthCheckComponent}
    }
</script>

<style scoped>

</style>