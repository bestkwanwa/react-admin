/*
进行local数据存储管理的工具模块
 */
import store from 'store'
const USER_KEY = 'user_key'
export default {
  /*
  保存user
   */
  saveUser (user) {
    // 注意第二个参数要转字符串
    // localStorage.setItem(USER_KEY, JSON.stringify(user)) 
    store.set(USER_KEY, user)
  },

  /*
  读取user
  返回对象
   */
  getUser () {
    // return JSON.parse(localStorage.getItem(USER_KEY) || '{}')
    return store.get(USER_KEY) || {}
  },

  /*
  删除user
   */
  removeUser () {
    // localStorage.removeItem(USER_KEY)
    store.remove(USER_KEY)
  }
}