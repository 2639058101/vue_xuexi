<template>
	<div class="type-nav">
		<div class="container">
			<div @mouseleave="leaveshow"
					 @click="goSearch">
				<h2 class="all"
						@mouseenter="ShowType">全部商品分类</h2>
				<transition name="sort">
					<div class="sort"
							 v-show="show">
						<div class="all-sort-list2">
							<div class="item"
									 v-for=" (list1,index) in creatoryList"
									 :key="list1.categoryId"
									 :class="{cur:surrentIndex==index}">
								<h3 @mouseenter="ShowColor(index)">
									<a :data-categoryName="list1.categoryName"
										 :data-categoryIndex="1">{{list1.categoryName}}</a>
								</h3>
								<div class="item-list clearfix"
										 :style="{display:surrentIndex==index?'block':'none'}">
									<div class="subitem"
											 v-for="list2 in list1.categoryChild"
											 :key="list2.categoryId">
										<dl class="fore">
											<dt>
												<a :data-categoryName="list2.categoryName"
													 :data-categoryIndex="2">{{list2.categoryName}}</a>
											</dt>
											<dd>
												<em v-for="list3 in list2.categoryChild"
														:key="list3.categoryId">
													<a :data-categoryName="list3.categoryName"
														 :data-categoryIndex="3">{{list3.categoryName}}</a>
												</em>
											</dd>
										</dl>
									</div>
								</div>
							</div>
						</div>
					</div>
				</transition>

			</div>
			<nav class="nav">
				<a href="###">服装城</a>
				<a href="###">美妆馆</a>
				<a href="###">尚品汇超市</a>
				<a href="###">全球购</a>
				<a href="###">闪购</a>
				<a href="###">团购</a>
				<a href="###">有趣</a>
				<a href="###">秒杀</a>
			</nav>

		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import throttle from 'lodash/throttle'

export default {
	name: 'TypeNav',
	data () {
		return {
			surrentIndex: -1,
			show: true
		}
	},
	mounted () {

		if (this.$route.path != '/home') {
			this.show = false
		}
	},
	computed: {
		...mapState({
			//statel 里面包含大仓库 state 里面小仓库里的 state
			creatoryList: (state) => state.home.creatoryList
		})
	},
	methods: {
		ShowColor: throttle(function (index) {
			this.surrentIndex = index

		}, 50),
		goSearch (e) {
			let element = e.target
			if (element.tagName == 'A') {
				let { categoryname, categoryindex } = element.dataset
				let location = { name: 'search' }
				location.query = {
					categoryname,
					categoryindex
				}
        location.params= this.$route.params
				this.$router.push(location)
			}
		},
		ShowType () {
			this.show = true
		},
		leaveshow () {
			this.surrentIndex = -1
			if (this.$route.path != '/home') {
				this.show = false
			}
		}
	}
}
</script>

<style scoped lang='less'>
.type-nav {
	border-bottom: 2px solid #e1251b;

	.container {
		width: 1200px;
		margin: 0 auto;
		display: flex;
		position: relative;

		.all {
			width: 210px;
			height: 45px;
			background-color: #e1251b;
			line-height: 45px;
			text-align: center;
			color: #fff;
			font-size: 14px;
			font-weight: bold;
		}

		.nav {
			a {
				height: 45px;
				margin: 0 22px;
				line-height: 45px;
				font-size: 16px;
				color: #333;
			}
		}

		.sort {
			position: absolute;
			left: 0;
			top: 45px;
			width: 210px;
			height: 461px;
			position: absolute;
			background: #fafafa;
			z-index: 999;

			.all-sort-list2 {
				.item {
					h3 {
						line-height: 30px;
						font-size: 14px;
						font-weight: 400;
						overflow: hidden;
						padding: 0 20px;
						margin: 0;

						a {
							color: #333;
						}
					}

					.item-list {
						display: none;
						position: absolute;
						width: 734px;
						min-height: 460px;
						background: #f7f7f7;
						left: 210px;
						border: 1px solid #ddd;
						top: 0;
						z-index: 9999 !important;

						.subitem {
							float: left;
							width: 650px;
							padding: 0 4px 0 8px;

							dl {
								border-top: 1px solid #eee;
								padding: 6px 0;
								overflow: hidden;
								zoom: 1;

								&.fore {
									border-top: 0;
								}

								dt {
									float: left;
									width: 54px;
									line-height: 22px;
									text-align: right;
									padding: 3px 6px 0 0;
									font-weight: 700;
								}

								dd {
									float: left;
									width: 415px;
									padding: 3px 0 0;
									overflow: hidden;

									em {
										float: left;
										height: 14px;
										line-height: 14px;
										padding: 0 8px;
										margin-top: 5px;
										border-left: 1px solid #ccc;
									}
								}
							}
						}
					}
				}
				.cur {
					background-color: skyblue;
				}
			}
		}
		//过度动画
		.sort-enter {
			height: 0px;
		}
		.sort-enter-to {
			height: 461px;
		}
		.sort-enter-active {
			overflow: hidden;
			transition: all 0.5s linear;
		}
		a {
			cursor: pointer;
		}
	}
}
</style>