import Mock from 'mockjs'
import homeApi from './MockData/homeApi'
import storeApi from './MockData/StoreApi'
//拦截器
Mock.mock('/home/getHomeData', homeApi.getHomeData)
Mock.mock('/home/getStoreData', storeApi.getStoreData)