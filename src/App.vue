<template>
  <div id="app">
   <router-view></router-view>
  </div>
</template>

<script>

import HomePage from './components/HomePage'
export default {
  name: 'app',
  components: {
    HomePage
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
    width:100%;
}
</style>