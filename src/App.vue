<template>
	<div>
		<Header></Header>
    <router-view></router-view>
    <Footer v-show="$route.meta.show"></Footer>
	</div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
	name: 'App',
	components: {
		Header,
    Footer
	},
  mounted() {
    //性能优化 三级菜单数据派发获取 放这里就只需要派发一次 然后其他组件从仓库获取就行
    this.$store.dispatch('creatoryList')
  },
}
</script>

<style scoped lang='less'>
</style>
