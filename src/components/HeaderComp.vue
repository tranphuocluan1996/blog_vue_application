<template>
  <header class="masthead" v-bind:style="`background-image: url('${backgound_img}')`">
		<div class="overlay"></div>
		<div class="container">
			<div class="row">
				<div class="col-lg-8 col-md-10 mx-auto">
					<div v-bind:class="className">
						<h1>{{title}}</h1>
						<span class="subheading">{{text_subheading}}</span>
						<slot></slot>
				
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<script>

export default {
	name:"header-comp",
	props:{
		text_subheading:{type:String, default:'Tổng công ty Điện Lực EVN'},
		title :{type:String, default:"Trang chủ"},
		backgound_img:{type:String, default:'/dist/img/home-bg.jpg'},
		className:{type:String, default:'site-heading'}
	}
}
</script>

<style>

</style>