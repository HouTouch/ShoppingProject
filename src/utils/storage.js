// 制定一个通用的键名
const INFO_KEY = 'shopping_info'
export const getInfo = () => {
  // 获取个人信息，如果result为空，则返回默认对象
  const defaultObj = { token: '', userId: '' }
  const result = localStorage.getItem(INFO_KEY)
  return result ? JSON.parse(result) : defaultObj
}
// 设置个人信息
export const setInfo = (obj) => {
  localStorage.setItem(INFO_KEY, JSON.stringify(obj))
}
export const removeInfo = () => {
  localStorage.removeItem(INFO_KEY)
}

// 制定搜索页面的持久化存储
// 获取搜索记录
const SEARCH_KEY = 'search_history'
export const getSearchHistory = () => {
  const result = localStorage.getItem(SEARCH_KEY)
  return result ? JSON.parse(result) : []
}
// 设置搜索记录
export const setSearchHistory = (arr) => {
  localStorage.setItem(SEARCH_KEY, JSON.stringify(arr))
}
