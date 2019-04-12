<template>
    <div id="app">
        <NavigationBar v-if="!isHomepage"/>
        <router-view></router-view>
        <Footer v-if="!isHomepage"/>
    </div>
</template>

<script>
    import NavigationBar from './components/NavigationBar/NavigationBar'
    import Footer from './components/Footer/Footer'

    export default {
        name: 'app',
        isHomepage: true,
        components: {
            NavigationBar,
            Footer
        },

        watch: {
            '$route'(to, from) {
                this.isHomepage = (this.$route.path === '/');
            }
        },
        data() {
            return {
                isHomepage: true,
            }
        }
    }
</script>

<style>
    @import "assets/css/fonts.css";

    html,
    body {
        height: 100%;
    }

    #app {
        font-family: MuseoSansBold;
        text-align: center;
        height: inherit;
    }
</style>
