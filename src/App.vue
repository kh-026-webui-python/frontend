<template>
    <div class="app">
        <nav class="navbar navbar-inverse">
            <div class="container-fluid">
                <ul class="list-inline">
                    <li class="list-inline-item">
                        <router-link to="/">Home</router-link>
                    </li>
                    <li class="list-inline-item">
                        <router-link to="/health_check">Health check</router-link>
                    </li>
                    <li class="list-inline-item">
                        <router-link to="/resume">Resume</router-link>
                    </li>
                </ul>
            </div>
        </nav>
        <router-view class="view">

        </router-view>
<!--      <nav class="navbar navbar-default">-->
<!--        <div class="container-fluid">-->
<!--          <ul class="nav navbar-nav">-->
<!--              <li><router-link to="/" class="nav-link">Home</router-link></li>-->
<!--              <li><router-link to="/health_check" class="nav-link">Health Check</router-link></li>-->
<!--          </ul>-->
<!--        </div>-->
<!--      </nav>-->
<!--     <router-view class="view"></router-view>-->
    </div>
</template>

<script>

</script>

<style>

</style>
