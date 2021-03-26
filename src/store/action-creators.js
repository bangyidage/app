import { ADD, REDUCE } from './action'
export const ADD_ACTION = (value) => ({
  type: ADD,
  value
})
export const REDUCE_ACTION = (value) => ({
  type: REDUCE,
  value
})

// Action：存放数据的对象，即消息的载体，只能被别人操作，自己不能进行任何操作。
