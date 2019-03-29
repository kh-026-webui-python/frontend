<template>
    <div id="app">
        <NavigationBar/>
        <router-view></router-view>
    </div>
</template>

<script>
    import NavigationBar from './views/NavigationBar/NavigationBar'

    export default {
        name: 'app',
        components: {
            NavigationBar
        },
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Nunito');


    #app {
        font-family: 'Nunito', sans-serif;
        margin: 0 0 20px 0;
        text-align: center;
        color: #416eb7;
        width: 100%;
    }
</style>
