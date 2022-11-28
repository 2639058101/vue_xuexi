import { reqCategoryList,reqCategorybanner,reqCategoryfloor } from '@/api'

const state = {
  creatoryList: [],
  creatorybanner: [],
  creatoryfloor: [],

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
  async getFloorList({commit}) {
    let result = await reqCategoryfloor()
    if(result.code==200){
      commit("GETFLOORLIST",result.data)
    }
  },
}

const mutations = {
  CREATORYLIST(state,value){
    state.creatoryList=value
  },
  GETBANNERLIST(state,value){
    state.creatorybanner=value
  },
  GETFLOORLIST(state,value){
    state.creatoryfloor=value
  },
}

const getters = {}

export default {
  actions,
  mutations,
  state,
  getters,
}
