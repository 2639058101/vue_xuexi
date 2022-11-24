<template>
	<div>
		<h3>{{$route.params.params}}</h3>
		<h3>{{$route.query.query}}</h3>
	</div>
</template>

<script>
export default {
	name: 'Search'
}
</script>

<style>
</style>