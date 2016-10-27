<style lang="stylus">
	*
		margin 0
		padding 0
		font-family Microsoft YaHei
		font-size 16px
	a
		text-decoration none
		color inherit
	ul
	ol
		list-style none
	em
	i
		font-style normal
	.w1100
		width 1100px
		margin-right auto
		margin-left @margin-right
	h1
		font-size 20px
		font-weight normal
</style>
<template>
	<div id="App">
		<my-header></my-header>
		<router-view></router-view>
		<my-footer></my-footer>
	</div>
</template>
<script>
	import MyHeader from "./components/Header";
	import MyFooter from "./components/Footer";
	export default {
		components : {
			MyHeader,
			MyFooter
		}
	};
</script>