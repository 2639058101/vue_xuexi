//先引入mockjs模块
import Mock from 'mockjs'


import floors from './floors.json'
import banners from './banners.json'

//mock数据:第一个参数请求地址  第二个请求数据
Mock.mock("/mock/banners",{code:200,data:banners})
Mock.mock("/mock/floors",{code:200,data:floors})