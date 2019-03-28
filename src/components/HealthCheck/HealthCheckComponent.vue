<template>
    <div>
        <p>{{  serverResponse  }}</p>
        <p>{{  databaseResponse  }}</p>
    </div>
</template>


<script>
    import axios from 'axios'

	export default {
		name: 'HealthCheckComponent',
			data: function() {
			    return {
				    serverResponse: null,
                    databaseResponse: null
		    	}
		},
		methods: {
            ping : function(comp){
                //var time = Date.now();
                //var date = new Date(time);
                //console.log(date.toString());
                axios
                    .get('http://127.0.0.1:8000/api/health_check/', { crossdomain : true })
                    .then(function(response) {
                        comp.serverResponse = response.data.server;
                        comp.databaseResponse = response.data.database;
                        console.log(comp.serverResponse);
                        console.log(comp.databaseResponse)
                    })
                    .catch(function (error) {
                        comp.serverResponse = error;
                        console.log(error)
                    })
            }
		},
        mounted() {
		    var comp = this;

		    this.ping(comp)
        }
    }
</script>
