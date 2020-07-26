<template>
	<div class="about-us">
		 <header-comp 
		text_subheading="Địa chỉ : Cẩm Lệ, Đà Nẵng"
		 title="Trang về chúng tôi"
	 backgound_img="dist/img/about-bg.jpg"
	/>
		<div class="container">
			<div class="row">
				<div class="col-lg-8 col-md-10 mx-auto">
					<p>Về Tôi</p>
					<p>
						Chào các bạn, mình là Phạm Huy Hoàng, tác giả của blog Tôi đi code
						dạo và youtube channel Tôi Đi Code Dạo. Các bạn có thể gọi mình là
						Code Dạo, là Hoàng, hoặc Hoàng Code Dạo đều ok cả.Mình là một
						full-stack developer kiêm writer, blogger, Youtuber và đủ thứ lơ tơ
						mơ khác nữa.
					</p>
					<h3>Về blog Tôi Đi Code Dạo</h3>
					<p>
						Vốn sinh ra trong một gia đình nho giáo lâu đời, có truyền thống
						code dạo, cài win dạo nên tôi đặt tên blog là “Tôi Đi Code Dạo”. Đùa
						đấy, thật ra do hồi xưa mấy thầy ở trường hay doạ là “đứa nào ko lo
						học ra trường chỉ có nước đi code dạo”, nên mình lấy tên blog là Tôi
						Đi Code Dạo luôn! Đây là một blog về IT mà cũng ko phải về IT. Nội
						dung blog một nửa là về kĩ thuật lập trình, một nửa còn lại là những
						kinh nghiệm tôi học được: Cách deal lương, sắp xếp thời gian, kĩ
						năng mềm, ngôn ngữ lập trình nên học, con đường phát triển nghề
						nghiệp… Đó là những điều quan trọng ko thua gì kĩ năng lập trình.
					</p>
					<p>
						Phương châm của blog là: Developer cần biết nhiều điều hơn ngoài
						code, blog sẽ vừa dạy bạn code, vừa dạy bạn những điều còn lại. Nếu
						đây là lần đầu bạn ghé thăm blog, hãy click Bài viết hay để xem
						những bài viết/series đặc sắc nhất của blog nhé. Blog luôn có bài
						viết mới 1 lần/tuần vào thứ 3. Ngoài ra, những bài viết hay và hữu
						ích trên blog đã được tổng hợp lại thành 1 cuốn sách mang tên Code
						Dạo Kí Sự, được hơn 250 review 5 sao trên Tiki. Nếu thích cầm sách
						giấy các bạn có thể mua trên Tiki ủng hộ mình nhé!
					</p>
				</div>
			</div>
		</div>

		<hr />
	</div>
</template>

<script>
import BlogList from '../components/BlogList'
import HeaderComp from '../components/HeaderComp';

export default {
	name: "about-us",

	components:{
			
			HeaderComp,
			BlogList
		}
};
</script>

<style></style>
