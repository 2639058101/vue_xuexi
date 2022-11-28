import requests from './request'
import requestsMock from './MockAjax'

//三级联动请求接口
export  const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' })
export  const reqCategorybanner = () => requestsMock.get('/banners')
export  const reqCategoryfloor = () => requestsMock.get('/floors')
export  const reqCategorySearch = (parms) => requests({url:'/list',method:'post',data:parms})
