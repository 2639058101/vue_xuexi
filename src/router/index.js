import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter)

import Home from '@/views/Home'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Search from '@/views/Search'

export default new VueRouter({
  routes:[
    {
      path:"/home",
      component:Home,
      meta:{show:true}
    },
    {
      path:'/login',
      component:Login,
      meta:{show:false}
    },
    {
      path:'/register',
      component:Register,
      meta:{show:false}
    },
    {
      name:'search',
      path:'/search/:params?',
      component:Search,
      meta:{show:true}
    },
    {
      path:'*',
      redirect:'/home'
    }
  ]
})