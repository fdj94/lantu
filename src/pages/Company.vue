<style scoped lang="stylus">
	.company
		margin-top 70px
		width 100%
		height 1700px
		.screen
			width 100%
			height 650px
			background url("../assets/company_bg.jpg") no-repeat center bottom
			background-size cover
			position relative
			.pic1
				position absolute
				top 50%
				left 10%
			.pic2
				width 800px
				margin 0 auto
				padding-top 212px
			.pic3
				position absolute
				top 50%
				right 10%
			.pic4
				position absolute
				bottom 10%
				right 5%
		.title
			width 521px
			margin 45px auto 26px auto
			.img1
				img
					width @width*.5
					margin 0 auto
					display block
			h1
				width 80px
				margin 26px auto 26px auto
		.news
			width 850px
			height 770px
</style>
<template>
	<div class="company">
		<div class="screen">
			<div class="pic1">
				<img src="../assets/bg_p1.png" />
			</div>
			<div class="pic2">
				<img src="../assets/bg_p2.png" />
			</div>
			<div class="pic3">
				<img src="../assets/bg_p3.png" />
			</div>
			<div class="pic4">
				<img src="../assets/bg_p4.png" />
			</div>
		</div>
		<div class="title">
			<div class="img1">
				<img src="../assets/t_n.png" />
			</div>
			<h1>公司动态</h1>
			<div class="img2">
				<img src="../assets/line.png" />
			</div>
		</div>
		<div class="news"></div>
	</div>
</template>
<script></script>