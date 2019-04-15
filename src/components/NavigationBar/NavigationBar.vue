<template>
    <b-navbar id="main-navbar" toggleable="lg" type="light" variant="light" sticky>
        <b-navbar-brand to="/"><span class="brand-light">soft</span><span class="brand-medium">test</span>
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item to="/resume">Resume</b-nav-item>
                <b-nav-item to="/file_registration">Registration by file</b-nav-item>
            </b-navbar-nav>
            <b-navbar-nav class="ml-auto">
                <b-nav-item-dropdown right>
                    <template slot="button-content">
                        <img src="../../assets/img/user-icon.svg" style="height:2rem;"
                             v-b-tooltip.hover title="User">
                    </template>
                    <b-dropdown-item href="#">Profile</b-dropdown-item>
                    <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-collapse>
        <HealthCheckComponent/>
    </b-navbar>
</template>

<script>
    import HealthCheckComponent from '../HealthCheck/HealthCheckComponent'

    export default {
        name: "NavigationBar",
        components: {HealthCheckComponent}
    }
</script>

<style scoped>
    .brand-light {
        font-family: MuseoSansRegular;
        color: #463853;
    }

    .brand-medium {
        font-family: MuseoSansBold;
        color: #463853;
    }

    .navbar-light .navbar-nav .nav-link {
        color: rgb(153, 141, 160);
        font-family: GTEestiPro;
        font-weight: normal;
    }

    .nav-link:hover {
        background-color: #FBFBFD;
        color: #463853 !important;
        border-radius: 0.5rem;
    }

    #main-navbar {
        box-shadow: 0 1px 0 0 rgba(142, 81, 199, 0.05);
        background: white !important;

    }
</style>