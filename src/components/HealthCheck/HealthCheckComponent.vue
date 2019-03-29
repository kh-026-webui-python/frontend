<template>
    <div>
        <div v-if="serverResponse === 'pong'">
            <div v-if="databaseResponse === 'pong'">
                <img class="" src="../../assets/Green.png" alt="DB and Server are okey" title="DB and Server are okey">
            </div>
            <div v-else>
                <img class="" src="../../assets/Yellow.png" alt="Something bad with DB" title="Something bad with DB">
            </div>
        </div>
        <div v-else>
            <img class="" src="../../assets/Red.png" alt="Something bad with server and DB"
                 title="Something bad with server">
        </div>
    </div>
</template>


<script>
    import axios from 'axios'

    export default {
        name: 'HealthCheckComponent',
        data: function () {
            return {
                serverResponse: null,
                databaseResponse: null
            }
        },
        methods: {
            ping: function (comp) {
                //var time = Date.now();
                //var date = new Date(time);
                //console.log(date.toString());
                axios
                    .get('http://127.0.0.1:8000/api/health_check/', {crossdomain: true})
                    .then(function (response) {
                        comp.serverResponse = response.data.server;
                        comp.databaseResponse = response.data.database;
                        // console.log(comp.serverResponse);
                        // console.log(comp.databaseResponse)
                    })
                    .catch(function (error) {
                        comp.serverResponse = error;
                        // console.log(error)
                    })
            }
        },
        mounted() {
            var comp = this;

            this.ping(comp)
        }
    }
</script>

<style>
    img {
        width: 16px;
        height: 16px;
    }
</style>
