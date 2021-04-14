import axios from 'axios'


const request = (method = 'get') => ({
  url,
  data,
}) => {
  // 接口请求添加随机数
  url = `${url}${url.indexOf('?') > 0 ? '&' : '?'}_timestamp=${(new Date()).getTime()}`

  return axios({
    timeout: 30000, // 前端请求30秒超时
    method,
    url,
    data,
  }).then(res => {
    let { status: resStatus, data: resData = {} } = res // axios响应体

    if (resStatus === 200) { // http code 200
      let { status: responseStatus, data: responseData = {} } = resData // 后端接口响应体
      let { time: __serverTime__ } = resData // 将后端响应中的time赋值至__serverTime__

      if (responseStatus === 0) { // 后端返回status 0 表示请求成功
        if (Array.isArray(responseData)) return responseData || [] // 兼容返回data是数组的情况
        if (Object.keys(responseData).length === 0) return responseData // 某些接口判断返回data字段是否是空对象的逻辑，所以这里针对空对象不增加__serverTime__字段

        return { ...responseData, __serverTime__ } || {}
      }
      throw resData
    }
    throw resData
  }).catch((err = {}) => {

    throw err
  })
}

const post = request('post')
const get = request('get')

export const register = ({ account, pwd }) => post({
  url: `http://localhost:7002/register`,
  data: {
    account,
    pwd
  }
})