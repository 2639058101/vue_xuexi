import {reqCategorySearch} from '@/api'
const state={

}

const actions={
  async getSearchList({commit},parms={}){
      let result= await reqCategorySearch(parms)
      console.log(result);
  }
}

const mutations={

}

const getters={

}

export default {
  actions,
  mutations,
  state,
  getters
}