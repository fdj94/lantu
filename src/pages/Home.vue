<style scoped lang="stylus">
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
	.home
		margin-top 70px
		.banner
			height 850px
		.case
			height 920px
		.partner
			height 500px
			.threePartner
				width 900px
				height 50px
				margin-right auto
				margin-left @margin-right
				margin-top 100px
				>div
					float left
					margin 0 58px
</style>
<template>
	<div class="home">
		<div class="banner"></div>
		<div class="case">
			<div class="title">
				<div class="img1">
					<img src="../assets/t_c.png" />
				</div>
				<h1>经典案例</h1>
				<div class="img2">
					<img src="../assets/line.png" />
				</div>
			</div>
		</div>
		<div class="partner">
			<div class="title">
				<div class="img1">
					<img src="../assets/home_t_c.png" />
				</div>
				<h1>研发伙伴</h1>
				<div class="img2">
					<img src="../assets/line.png" />
				</div>
			</div>
			<div class="threePartner">
				<div v-for="item of partner">
					<a><img :src="item.src" /></a>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return{
				partner : [
					{
						src : require("../assets/rd1.jpg")
					},
					{
						src : require("../assets/rd2.jpg")
					},
					{
						src : require("../assets/rd3.jpg")
					}
				]
			}
		}
	}
</script>