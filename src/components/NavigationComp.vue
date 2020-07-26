<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
		<div class="container">
			<router-link class="navbar-brand" to="/">Acer</router-link>
			<button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
				Menu
				<i class="fas fa-bars"></i>
			</button>
			<div class="collapse navbar-collapse" id="navbarResponsive">
				<ul class="navbar-nav ml-auto">
					<li class="nav-item">
						<router-link class="nav-link" to="/">Trang chủ</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" to="/about">Về chúng tôi</router-link>
					</li>
					<li class="nav-item">
						<router-link  class="nav-link" to="/contact">Liên hệ</router-link>
					</li>
					<li class="nav-item">
						<router-link  class="nav-link" to="/post-detail">Bài viết chi tiết</router-link>
					</li>
					<li class="nav-item">
						<router-link  class="nav-link" to="/product">Sản phẩm</router-link >
					</li>
					
					<li class="nav-item">
						<router-link  class="nav-link" to="/product">Giải trí</router-link >
					</li>
					<li class="nav-item">
						<router-link  class="nav-link" to="/product">Chuyện Coder</router-link >
					</li>
					<li class="nav-item">
						<router-link  class="nav-link" to="/product">Đăng nhập</router-link >
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	name:"navigation-comp",
	
}
</script>

<style>

</style>