import requests from './request'

//三级联动请求接口
export  const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' })
