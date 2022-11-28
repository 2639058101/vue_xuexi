<template>
	<div>
		<TypeNav></TypeNav>
		<List></List>
		<Today></Today>
		<Rank></Rank>
		<Like></Like>
		<Floor v-for="item in creatoryfloor" :key="item.id" :FloorData='item'></Floor>
		<Brand></Brand>
	</div>
</template> 

<script>
import List from '@/views/Home/List'
import Today from '@/views/Home/Today'
import Rank from '@/views/Home/Rank'
import Like from '@/views/Home/Like'
import Floor from '@/views/Home/Floor'
import Brand from '@/views/Home/Brand'
import { mapState } from 'vuex'

export default {
	name: 'Home',
	components: {
		List,
		Today,
		Rank,
		Like,
		Floor,
		Brand
	},
	computed: {
		...mapState({
			//statel 里面包含大仓库 state 里面小仓库里的 state
			creatoryfloor: (state) => state.home.creatoryfloor
		})
	},
	mounted () {
		this.$store.dispatch('getFloorList')
	},
}
</script>

<style lang='less'>
#nprogress .bar {
	background: red !important;
}
</style>