<style scoped lang="stylus">
	.example
		width 100%
		height 3300px
		margin-top 72px
		.screen
			width @width
			background url("../assets/example_bg.jpg") center top no-repeat
			background-size cover
			height 810px
		.title
			width 521px
			margin 26px auto
			.img1
				img
					width @width*.5
					margin 0 auto
					display block
			h1
				width 80px
				margin 26px auto 26px auto
		.word
			width 850px
			margin 0 auto
			h1
				margin 60px 0
			p
				color rgb(150, 150, 150)
				font-size 16px
				line-height 30px 
			img
				width 507px
				height 411px
				margin 60px 175.5px
</style>
<template>
	<div class="example">
		<div class="screen"></div>
		<div class="title">
			<div class="img1">
				<img src="../assets/t_c.png" />
			</div>
			<h1>经典案例</h1>
			<div class="img2">
				<img src="../assets/line.png" />
			</div>
		</div>
		<div class="word" v-for="item of word">
			<h1>{{item.title}}</h1>
			<p>{{item.text}}</p>
			<img :src="item.src" />
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return{
				word : [
					{
						title : "北京交通大学",
						text : "交大移动门户目前是我们建设最全的案例，包括50多个涉及工作、学习、生活的应用模块，每天使用人次上万。有完善的数据中心和陆续在建的各系统接口，并有多位在校生协助开发和完善，具有多套移动界面和子系统，还有物联应用部署。老师学生互动积极，反馈踊跃，对信息中心评价极高。",
						src : require("../assets/ct1.jpg")
					},
					{
						title : "中央财经大学",
						text : "中央财经大学作为财经类著名院校，我们为其搭建了全面的校园服务功能。团 队根据学校计划，在极短时间内完成了APP上线，同时也满足了较高的信息安全需求。此外，我们还为中财专门策划上线运营活动，并在后期的维护运营中增强了师生与移动门户的使用黏性，保持了中财在同类学校信息化建设中的前沿地位。",
						src : require("../assets/ct2.jpg")
					},
					{
						title : "中国戏曲学院",
						text : "中国戏曲学院作为艺术教学类著名院校，为师生策划了高度定制的APP服务，尤其是在场馆预定、视频类应用上做出了多种创新，发挥了学校的专业优势和资源优势，在弘扬戏曲文化、培养国粹人才方面做出了新的尝试。 ",
						src : require("../assets/ct3.jpg")
					}
				]
			}
		}
	}
</script>