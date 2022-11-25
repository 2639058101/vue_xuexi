import { reqCategoryList } from '@/api'

const state = {
  creatoryList: [],
}

const actions = {
  async creatoryList({commit}) {
    let result = await reqCategoryList()
    if(result.code==200){
      result.data.length=15
      commit("CREATORYLIST",result.data)
    }
  },
}

const mutations = {
  CREATORYLIST(state,value){
    state.creatoryList=value
  }
}

const getters = {}

export default {
  actions,
  mutations,
  state,
  getters,
}
