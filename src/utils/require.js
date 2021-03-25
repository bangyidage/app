import axios from 'axios'
export const ls = axios.post('http://yapi.yeshj.com/mock/317/post').then((res) => {
  return res.status
})