<style scoped lang="stylus">
	.needPeople
		margin-top 70px
		width 100%
		height 2100px
		.screen
			width 100%
			height 650px
			background url("../assets/needPeople_bg.jpg") no-repeat center top
			background-size cover
			.pic
				width 1200px
				margin 0 auto
				img
					margin-top 115px
					width 1252px
					height 533px
		.title
			width 521px
			margin 30px auto
			.img1
				img
					width @width*.5
					margin 0 auto
					display block
			h1
				width 80px
				margin 26px auto 26px auto
		.word
			h1
				width 520px
				padding 25px 0
				margin 0 auto
				color rgb(47, 150, 197)
			p
				width 520px
				line-height 30px
				margin 0 auto
				color rgb(150, 150, 150)
		.welfare
			width 660px
			margin 30px auto
			p
				text-align center
				line-height 45px
				color #93CA21
		.tel
			width 660px
			margin 0 auto
			span
				display inline-height
				color #628816
				margin 0 25px
</style>
<template>
	<div class="needPeople">
		<div class="screen">
			<div class="pic">
				<img src="../assets/needPeople_bg_p.png">
			</div>
		</div>
		<div class="title">
			<div class="img1">
				<img src="../assets/t_r.png" />
			</div>
			<h1>招贤纳士</h1>
			<div class="img2">
				<img src="../assets/line.png" />
			</div>
		</div>
		<div v-for="item of word" class="word">
			<h1>{{item.name}}</h1>
			<p v-for="next of item.son">{{next.text}}</p>
		</div>
		<div class="welfare">
			<p v-for="item of welfare">{{item.news}}</p>
		</div>
		<div class="tel">
			<span v-for="item of tel">{{item.text}}</span>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return{
				word : [
					{
						name : "HTML5移动app前端工程师（成都）",
						son : [
							{
								text : "本职位主要进行HTML5移动应用的前端代码编写及界面设计。"
							},
							{
								text : "1. 学历本科以上。计算机相关专业毕业优先。"
							},
							{
								text : "2. 精通JAVASCRIPT，熟悉JS面向对象编程，熟悉Jquery或Angular优先。"
							},
							{
								text : "3. 精通html dom 相关技术，精通css样式表。有Photoshop使用经验优先。"
							},
							{
								text : "4. 熟悉Phonegap/Cordova优先。"
							},
							{
								text : "5. 2年以上全职前端研发经验，有大型网站开发经验或移动应用开发经验者优先。"
							},
							{
								text : "6. 有一定的美术鉴赏能力，一定的文字功底，对优秀产品有广泛的了解，有设计优秀产品的野心。"
							},
							{
								text : "7. 有意愿为学校师生服务、有热情为大学校园提供最优质最有创意的产品，计算机相关专业毕业优先。"
							},
							{
								text : "8. 具有良好的代码习惯及团队合作精神。谦虚好学，有责任心。"
							}
						]
					},
					{
						name : "JAVA软件工程师（北京）",
						son : [
							{
								text : "本职位主要从事移动应用的服务端的研发工作及大客户数据调研和集成工作。后期可向售前技术支持发展。"
							},
							{
								text : "1.本科及以上学历，计算机相关专业。"
							},
							{
								text : "2.1年以上Java开发经验。"
							},
							{
								text : "3.有一定的MySQL、Oracle数据库基础。"
							},
							{
								text : "4.熟悉SpringMVC、Spring、Ibatis等框架优先。"
							},
							{
								text : "5.熟悉Redis或memcache内存数据库者优先。"
							},
							{
								text : "6.熟悉Tomcat、Weblogic等主流服务器。"
							},
							{
								text : "7.熟悉应用服务器在windows、linux操作系统上的安装、调试、配置及使用。"
							},
							{
								text : "8.性格外向、勇于挑战、服务意识好、有良好的团队精神。"
							},
							{
								text : "9.有较强的沟通能力及文案能力，能够快速响应客户需求。"
							},
							{
								text: "10.熟悉与第三方系统对接、有项目招投标经验者，优先考虑。"
							}
						]
					}
				],
				welfare : [
					{
						news : "我们能为您提供："
					},
					{
						news : "六险一金，全额公积金呢！"
					},
					{
						news : "项目提成、绩效奖金、年终奖金、优秀员工奖金拿到手软~"
					},
					{
						news : "每月额外餐补、节假日慰问、旅游基金等等等"
					},
					{
						news : "还有超长年假、免费体检、团队建设...各种有哦~！"
					},
					{
						news : "是否羡慕别人家的公司？来看看你即将进入的公司吧，不要再感慨别人家的公司了~"
					}
				],
				tel : [
					{
						text : "HR:刘女士"
					},
					{
						text : "招聘电话：028-86307598"
					},
					{
						text : "招聘邮箱：liuxt@lantunet.com"
					}
				]
			}
		}
	}
</script>