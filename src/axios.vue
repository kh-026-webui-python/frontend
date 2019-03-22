<template>
	<div id="axios">
		<h1>Test Backend</h1>
		{{  responseData  }}
	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		name: 'axios',
			data() {
			return {
				responseData: null
			}
		},
		mounted() {
			var time = Date.now()
			var date = new Date(time)
	        console.log(date.toString())

	        var comp = this

    		var healthRequest = function (comp) {
        		axios
	        		.get('http://127.0.0.1:8000/api/health_check/', { crossdomain : true })
					.then(function(response) {
						comp.responseData = response.data.ping
						console.log(comp.responseData)
					})
					.catch(function (error) {
						comp.responseData = 'error'
						console.log(error)
					})
    		}
    		var intervalRequest = setInterval(function () {
    			healthRequest(comp)}, 2000)

		}
	}
</script>