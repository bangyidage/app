import { USERSTATE } from './action'
const DEFAULT_USERSTATE = {
  id: '0',
  user: 'null',
  pwd: 'null'
}

export const TO_DO = (state = DEFAULT_USERSTATE, action) => {
  let newState = JSON.parse(JSON.stringify(state))
  if (action.type === USERSTATE) {
    newState.user = action.value.user
    newState.id = action.value.id
    newState.pwd = action.value.pwd
    return newState
  }
  return state
}
