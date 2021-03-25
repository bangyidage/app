import axios from 'axios'
import { ADD, REDUCE, AXIOS_REQUIRE } from './action'
export const ADD_ACTION = (value) => ({
  type: ADD,
  value
})
export const REDUCE_ACTION = (value) => ({
  type: REDUCE,
  value
})
export const AXIOS_REQUIRE_ACTION = (value) => ({
  type: AXIOS_REQUIRE,
  value
})
// Action：存放数据的对象，即消息的载体，只能被别人操作，自己不能进行任何操作。
export const requredData = async () => {
  let data = await axios.post('http://yapi.yeshj.com/mock/317/post').then((res) => {
    const s = res
    return s
  })
  return data
}
export const DATA_AXIOS = () => {
  return async (dispatch) => {
    const { status } = await axios.get('http://yapi.yeshj.com/mock/317/post')
    const action = 
  }
}