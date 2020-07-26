<template>
		<div class="home-page">


	<header-comp 
	 backgound_img="/dist/img/home-bg.jpg"
	/>

	<!-- Main Content -->
	<blog-list />

	<hr>


		</div>
</template>

<script>

import BlogList from '../components/BlogList'
import HeaderComp from '../components/HeaderComp';
export default {
		name:"Home-page",

		components:{
			
			HeaderComp,
			BlogList
		}
}
</script>

<style>

</style>