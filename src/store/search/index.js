import {reqCategorySearch} from '@/api'
const state={
  creatorySearch: [],
}

const actions={
  async getSearchList({commit},parms={}){
      let result= await reqCategorySearch(parms)
      if (result.code==200) {
        commit('GETSEARCHLIST',result.data)
      }
  }
}

const mutations={
  GETSEARCHLIST(state,value){
    state.creatorySearch=value
  }
}

const getters={
 goodsList(state){
  return state.creatorySearch.goodsList || []
 },
 attrsList(state){
  return state.creatorySearch.attrsList || []
 },
 trademarkList(state){
  return state.creatorySearch.trademarkList || []
 }
}


export default {
  actions,
  mutations,
  state,
  getters
}