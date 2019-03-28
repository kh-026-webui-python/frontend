<template>
	<div id="hello">
		<h2>{{message}}</h2>
		<ul>
			<router-link tag="li" active-class="active" to="/registration"><a>Registration</a></router-link>
			<router-link tag="li" active-class="active" to="/login"><a>Login</a></router-link>
		</ul>
	</div>
</div>
</template>

<script>

export default {
    name: "HomePage",
    data(){
    	return {
    		message:'Welcome'
    	}
    },
}

</script>

<style scoped>
ul{
	list-style-type:none;
}
</style>