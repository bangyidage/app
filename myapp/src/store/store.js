import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { TO_DO } from './reducer'
//存储空间，必须是唯一
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const enhancer = composeEnhancers(applyMiddleware(thunk))

export const store = createStore(TO_DO, enhancer)