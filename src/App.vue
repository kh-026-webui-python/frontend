<template>
    <div id="app">
        <NavigationBar v-if="!isFullscreen"/>
        <router-view></router-view>
        <Footer v-if="!isFullscreen"/>
    </div>
</template>

<script>
    import NavigationBar from './components/NavigationBar/NavigationBar'
    import Footer from './components/Footer/Footer'

    export default {
        name: 'app',
        components: {
            NavigationBar,
            Footer
        },

        watch: {
            // eslint-disable-next-line
            '$route'(to, from) {
                this.isFullscreen = (this.$route.path === '/' || this.$route.path === '/registration');
            }
        },
        data() {
            return {
                isFullscreen: true,
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
