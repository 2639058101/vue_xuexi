import { reqCategoryList,reqCategorybanner } from '@/api'

const state = {
  creatoryList: [],
  creatorybanner: [],

}

const actions = {
  async creatoryList({commit}) {
    let result = await reqCategoryList()
    if(result.code==200){
      result.data.length=15
      commit("CREATORYLIST",result.data)
    }
  },
  async getBannerList({commit}) {
    let result = await reqCategorybanner()
    if(result.code==200){
      commit("GETBANNERLIST",result.data)
    }
  },
}

const mutations = {
  CREATORYLIST(state,value){
    state.creatoryList=value
  },
  GETBANNERLIST(state,value){
    state.creatorybanner=value
  }
}

const getters = {}

export default {
  actions,
  mutations,
  state,
  getters,
}
