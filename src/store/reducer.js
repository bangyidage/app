import { ADD, REDUCE } from './action'
//纯函数，只承担计算 State 的功能，不合适承担其他功能，也承担不了，因为理论上，纯函数不能进行读写操作
const defaultState = {
  username: "null",
  password: "null"
}
export const reducer = (state = defaultState, action) => {

  if (action.type === ADD) {
    let newstate = JSON.parse(JSON.stringify(state))

    newstate.username = action.value.username
    newstate.password = action.value.password
    newstate.userID = 5

    return newstate
  }
  if (action.type === REDUCE) {
    let newstate = JSON.parse(JSON.stringify(state))

    newstate.username = action.value.username
    newstate.password = action.value.password
    newstate.userID = 6

    return newstate
  }
  return state
}