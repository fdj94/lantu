<style scoped lang="stylus">
	@keyframes outer03
		0%
			transform rotate(0deg)
		100%
			transform rotate(360deg)
	@keyframes outer07
		0%
			transform rotate(0deg)
			transform-origin 41px 108px
		100%
			transform rotate(360deg)
			transform-origin 41px 108px
	
	.button
		width 46px
		height @width
		position absolute
		bottom -23px
		left 50%
		margin-left -23px
		cursor pointer
		border-radius 50%
	.word
		width 287px
		height 140px
		padding-top 215px
		color rgb(0, 128, 186)
		float left
		h2
			height 70px
			line-height @height
			font-size 40px
			font-weight normal
		p
			height 35px
			line-height @height
			font-size 18px
	.w1000
		width 1000px
		margin 0 auto
	.mobileSchool
		margin-top 70px
		height 5850px
		.mobile
			position relative
			background-size cover
			background-position center
			&:nth-of-type(2n)
				background-attachment fixed
				height 430px
				z-index -1
			&:nth-of-type(2n+1)
				&:not(:first-of-type)
					height 591px
					bacnground-color rgb(240, 242, 245)
		.mobile01
			background-image url("../assets/mobile_bg1.jpg")
			height 845px
			.title
				color white
				float left
				margin 15% 0 0 30%
				h2
					font-size 46px
					line-height 70px
					font-weight normal
				p
					text-align right
					line-height 35px
					font-size 18px
			.base
				position absolute
				width 100%
				height 106px
				bottom 0
				background-color rgba(220, 220, 220, 0.4)
				.button
					top -23px
				p
					text-align center
					font-size 18px
					line-height 106px
					color white
		.mobile02
			background-image url("../assets/mobile_bg2.jpg")
		.mobile03
			.w1000
				position relative
				.xuanzhuan
					width 530px
					height 353px
					position absolute
					right 0
					top 120px
					.quan
						position absolute
						top -40px
						left 35px
						animation outer03 10s infinite linear
		.mobile04
			background-image url("../assets/mobile_bg3.jpg")
		.mobile05
			.w1000
				position relative
				.word
					position absolute
					right 0
				.lunbo
					position absolute
					left 0
					top 130px
					.picture
						width 324px
						height 324px
						float left
						background-image url("../assets/m5.png")
					.wenzi
						width 150px
						height 308px
						float left
						margin-left 50px
						font-size 20px
						cursor pointer
						color rgb(0, 128, 196)
						>div
							margin 10px 0
							font-size 20px
							cursor pointer
							color rgb(0, 128, 196)
							span
								border-radius 50%
								display inline-block
								margin-right 25px
								border 5px solid rgb(182, 210, 48)
								margin-top -8px
						.bigword
							font-size 26px
		.mobile06
			background-image url("../assets/mobile_bg4.jpg")
		.mobile07
			.w1000
				position relative
				.xuanzhuan
					width 530px
					height 430px
					position absolute
					right 0
					top 120px
					.quan
						position absolute
						top 106px
						left 214px
						animation outer07 60s infinite linear
		.mobile08
			background-image url("../assets/mobile_bg5.jpg")
		.mobile09
			.w1000
				position relative
				.xuanzhuan
					width 530px
					height 452px
					position absolute
					left 0
					top 120px
					.quan
						position absolute
						top -1px
						left -3px
						animation outer03 20s infinite linear
				.word
					position absolute
					right 0
		.mobile10
			background-image url("../assets/mobile_bg6.jpg")
		.mobile11
			.w1000
				position relative
				.word
					height 188px
					.four
						>div
							width 37px
							height 63px
							float left
							margin-right 15px
							span
								font-size 16px
								display block
								text-align center
								margin-bottom 10px
							img
								width 35px
								height 35px
				.big
					position absolute
					right 0
					top 120px
					width 668px
					height 360px
</style>
<template>
	<div class="mobileSchool">
		<div class="mobile mobile01">
			<div class="title">
				<h2>兰途移动校园</h2>
				<p>—— 我们做的不仅仅是APP</p>
			</div>
			<div class="base">
				<div class="button" @click="goOne">
					<img src="../assets/a_d.png" />
				</div>
				<p>梳理、提升、准备，我们为您提供一站式全生命周期的呵护</p>
			</div>
		</div>
			<div class="mobile mobile02"></div>
		<div class="mobile mobile03">
			<div class="w1000">
				<div class="word">
					<h2>兰途移动校园</h2>
					<p>国内最有粘性的定制化移动校园</p>
					<p>不只是APP，更是新的校园生态系统</p>
				</div>
				<div class="xuanzhuan">
					<img src="../assets/m3.png" />
					<div class="quan">
						<img src="../assets/ct3_out.png" />	
					</div>
				</div>
			</div>
			<div class="button" @click="go(1)">
				<img src="../assets/a_d.png" />
			</div>
		</div>
			<div class="mobile mobile04"></div>
		<div class="mobile mobile05">
			<div class="w1000">
				<div class="word">
					<h2>九大应用群</h2>
					<p>60多个独具粘性的独立应用</p>
					<p>真正离不开的一站式校园服务</p>
				</div>
				<div class="lunbo">
					<div class="picture" :style="{'background-position-y': (currentIndex) * 324 + 'px'}"></div>
					<div class="wenzi">
						<div v-for="(item, index) of wenzi" :class="{bigword:index === currentIndex}" @click="wordclick(index)">
							<span></span>
							{{item.name}}
						</div>
					</div>
				</div>
			</div>
			<div class="button" @click="go(2)">
				<img src="../assets/a_d.png" />
			</div>
		</div>
			<div class="mobile mobile06"></div>
		<div class="mobile mobile07">
			<div class="w1000">
				<div class="word">
					<h2>完善的生态系统</h2>
					<p>快速迭代，试错响应，师生参与</p>
					<p>以互联网方式来做服务软件</p>
				</div>
				<div class="xuanzhuan">
					<img src="../assets/m7.png" />
					<div class="quan">
						<img src="../assets/m7_c.png" />	
					</div>
				</div>
			</div>
			<div class="button" @click="go(3)">
				<img src="../assets/a_d.png" />
			</div>
		</div>
			<div class="mobile mobile08"></div>
		<div class="mobile mobile09">
			<div class="w1000">
				<div class="xuanzhuan">
					<img src="../assets/m9_bg.png" />
					<img src="../assets/m9.png" class="quan" />	
				</div>
				<div class="word">
					<h2>全平台</h2>
					<p>对于重复建设，其实我是拒绝的~</p>
					<p>更纯粹的跨平台技术</p>
				</div>
			</div>
			<div class="button" @click="goBo">
				<img src="../assets/a_d.png" />
			</div>
		</div>
			<div class="mobile mobile10"></div>
		<div class="mobile mobile11">
			<div class="w1000">
				<div class="word">
					<h2>全平台</h2>
					<p>一次建设，全面上线 </p>
					<div class="four">
						<div v-for="item of four">
							<span>{{item.name}}</span>
							<img :src="item.src" />
						</div>
					</div>
				</div>
				<div class="big">
					<img src="../assets/m11.png" />
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	let t;
	const timer = callback => {
		t = setInterval(() => {
			callback();
		}, 2000);
	};
	export default {
		data(){
			return{
				four : [
					{
						name : "P C",
						src : require("../assets/m11_win.png")
					},
					{
						name : "苹果",
						src : require("../assets/m11_ios.png")
					},
					{
						name : "安卓",
						src : require("../assets/m11_an.png")
					},
					{
						name : "微信",
						src : require("../assets/m11_we.png")
					}
				],
				wenzi : [
					{
						name: "基础服务"
					},
					{
						name: "迎新系统"
					},
					{
						name: "毕业就业"
					},
					{
						name: "教学教务"
					},
					{
						name: "科研教务"
					},
					{
						name: "智慧物联"
					},
					{
						name: "生活服务"
					},
					{
						name: "家长校友"
					},
					{
						name: "校园社区"
					}
				],
				currentIndex : 0
			}
		},
		methods : {
			goOne(){
				var i = 0,
					a = document.body.scrollTop,
					_this = document.body.scrollTop;
				var timer = setInterval(function(){
					if(a < 1160){
						i = i + 10;
						scrollTo(0, i + _this);
						a = document.body.scrollTop;
					}else{
						clearInterval(timer);
					}
				},10);
			},
			go(num){
				var i = 0,
					a = document.body.scrollTop,
					_this = document.body.scrollTop;
				var timer = setInterval(function(){
					if(a < 1170 + num *1021){
						i = i + 10;
						document.body.scrollTop = _this + i;
						a = document.body.scrollTop;
					}else{
						clearInterval(timer);
					}
				},10);
			},
			goBo(){
				var i = 0,
					a = document.body.scrollTop,
					_this = document.body.scrollTop;
				var timer = setInterval(function(){
					if(a < 5150){
						i = i + 10;
						document.body.scrollTop = _this + i;
						a = document.body.scrollTop;
					}else{
						clearInterval(timer);
					}
				},10);
			},
			wordclick(index){
				clearInterval(t);
				this.currentIndex = index;
				timer(() => {
				let currentIndex = this.currentIndex;
				this.currentIndex = currentIndex > 7 ? 0 : currentIndex + 1;
				this.index1 = currentIndex;
			});
			},
		},
		mounted(){
			timer(() => {
				let currentIndex = this.currentIndex;
				this.currentIndex = currentIndex > 7 ? 0 : currentIndex + 1;
			});
			const aaa = document.querySelectorAll(".mobile:nth-of-type(odd)");
	aaa.forEach(item => {
		item.style.transform = "translateY(-500px)"
	});
		}
	};
</script>