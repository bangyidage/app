const defaultState = {
  userId: 0
}
export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'login':

      let newState = action.value
      return newState
    default:
      return state
  }
}