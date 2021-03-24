import { ADD } from './action'
const defaultState = {
  username: "null",
  password: "null"
}
export const reducer = (state = defaultState, action) => {

  if (action.type === ADD) {
    let newstate = JSON.parse(JSON.stringify(state))

    newstate.username = action.value.username
    newstate.password = action.value.password
    newstate.userID = action.value.userID + 1

    return newstate
  }
  return state
}