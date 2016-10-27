<style scoped lang="stylus">
.color
	color rgb(167, 195, 30)
.header
	width 100%
	height 66px
	background-color rgb(233, 235, 238)
	box-shadow 0 1px 2px 1px rgba(200,200,200,0.8)
	position fixed
	top 0
	z-index 100
	.logo
		margin 12px
	.Nav
		float right
		div
			display inline-block
			margin 26px 40px 26px 40px
			cursor pointer
			&:hover
				@extend .color
</style>
<template>
	<div class="header">
		<div class="w1100">
			<img src="../assets/logo.png" class="logo"/>
			<div class="Nav">
			<div v-for="(item, index) of list" @click="clk(index)" :class="{color:index === currentIndex}"><router-link :to="item.href" >{{item.name}}</router-link></div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return{
				list:[
					{
						name : "首页",
						href : "/"
					},
					{
						name : "移动校园",
						href : "/mobileSchool"
					},
					{
						name : "经典案例",
						href : "/example"
					},
					{
						name : "公司动态",
						href : "/company"
					},
					{
						name : "招贤纳士",
						href : "/needPeople"
					},
					{
						name : "联系我们",
						href : "/connection"
					}
				],
				currentIndex : 0
			}
		},
		methods : {
			clk(index){
				this.currentIndex = index;
			}
		}
	}
</script>