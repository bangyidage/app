import { createStore } from 'redux'
import { reducer } from './reducer'
//存储空间，必须是唯一
export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())