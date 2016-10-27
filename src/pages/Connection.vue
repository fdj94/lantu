<style scoped lang="stylus">
	.title
				width 521px
				margin 26px auto
				padding-top 52px
				.img1
					img
						width @width*.5
						margin 0 auto
						display block
				h1
					width 80px
					margin 26px auto
	.connection
		width 100%
		height 1400px
		margin-top 70px
		.screen
			background url("../assets/connection_bg.jpg") no-repeat center top
			background-size cover
			height 650px
			.pic
				img
					display block
					width 150px
					height 150px
					margin 26px auto
				p
					text-align center
					color white
			.way
				width 771px
				height 113px
				margin 80px auto 0 auto
				>div
					float left
					width 201px
					height 100%
					margin 0 28px
					text-align center
					p
						margin-top 10px
						color white
		.second
			position relative
			.list
				margin-top 100px
				>div
					height 70px
					margin-top 40px
					img
						float left
						width 70px
						height @width
					span
						margin-left 40px
						line-height 70px
						font-size 20px
			.map
				position absolute
				top -250px
				left 250px
				z-index -1
</style>
<template>
	<div class="connection">
		<div class="screen">
			<div class="title">
				<div class="img1">
					<img src="../assets/connection-t_c.png" />
				</div>
				<h1>联系我们</h1>
				<div class="img2">
					<img src="../assets/line.png" />
				</div>
			</div>
			<div class="pic">
				<img src="../assets/wx.jpg">
				<p>打开微信，扫描二维码关注我们</p>
			</div>
			<div class="way">
				<div v-for="item of way">
					<img :src="item.src" />
					<p>{{item.show}}</p>
				</div>
			</div>
		</div>
		<div class="second">
			<div class="title">
				<div class="img1">
					<img src="../assets/bus_t_r.png" />
				</div>
				<h1>联系我们</h1>
				<div class="img2">
					<img src="../assets/line.png" />
				</div>
			</div>
			<div class="list w1100">
				<div v-for="item of list">
					<img :src="item.src" />
					<span>{{item.show}}</span>
				</div>
			</div>
			<div class="map">
				<img src="../assets/ct_map.png" />
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return{
				way : [
					{
						show : "service@lantunet.com",
						src : require("../assets/bg_email.png")
					},
					{
						show : "400-030-9411",
						src : require("../assets/bg_phone.png")
					},
					{
						show : "成都市高新区环球中心E2",
						src : require("../assets/bg_location.png")
					}
				],
				list : [
					{
						show : "125路、171A路、171B路、240路到环球中心站下",
						src : require("../assets/ct_bus.png")
					},
					{
						show : "乘坐地铁一号线在锦城广场站下车，地铁A或B出口",
						src : require("../assets/ct_subway.png")
					},
					{
						show : "搜索成都市高新区环球中心E2",
						src : require("../assets/ct_search.png")
					}
				]
			}
		}
	}
</script>