import React from 'react'
import './style.css'
import { store } from '../../store/store.js'
import { ADD_ACTION, REDUCE_ACTION } from '../../store/action-creators'

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userID: '1',
      username: '',
      password: ''
    }
  }

  componentDidMount() {

  }
  userChange = (e) => {
    this.setState({
      username: e.target.value && e.target.value.trim()
    })
  }
  passwordChange = (e) => {
    this.setState({
      password: e.target.value && e.target.value.trim()
    })
  }
  //空->false
  confirmData = (data) => {
    const { userID, username, password } = data
    if (!(userID && username && password)) {
      return false
    }
    return true
  }
  listerner = () => {
    let newState = store.getState();
    this.setState(newState);
  }
  loginIn = (e) => {

    let data = this.result()
    let flag = this.confirmData(data)
    if (!flag) {
      console.log(!flag)
      return
    }
    //action 是一个动作和当前状态值
    // export const ADD_ACTION = (value) => ({
    //   type: ADD,
    //   value
    // })
    const action = ADD_ACTION(data)
    store.dispatch(action)

    store.subscribe(this.listerner)

  }
  loginOut = () => {
    let data = this.result()

    let flag = this.confirmData(data)
    if (!flag) {
      console.log(false)
      return
    }
    const action = REDUCE_ACTION(data)
    store.dispatch(action)
    store.subscribe(this.listerner)
  }
  result = () => {
    const { userID, username, password } = this.state
    let data = {
      userID: userID,
      username: username,
      password: password
    }
    console.log(data)
    return data
  }
  userIDChange = (e) => {
    this.setState({
      userID: e.target.value
    })
  }
  render() {
    const { userID, username, password } = this.state
    return (
      <div className="login">
        <div className="title">注册</div>
        <div className="input-wrap">
          <label htmlFor="userID" className="input-title">用户名ID:</label>
          <input id="userID"
            className="input"
            value={userID}
            onChange={this.userIDChange}
          />
        </div>
        <div className="input-wrap">
          <label htmlFor="user" className="input-title">用户名:</label>
          <input id="user"
            className="input"
            value={username}
            onChange={this.userChange}
          />
        </div>
        <div className="input-wrap">
          <label htmlFor="password" className="input-title">密 码:</label>
          <input id="password"
            className="input"
            onChange={this.passwordChange}
            value={password}
          />
        </div>

        <div className="btn" onClick={this.loginIn}>登入</div>
        <div className="btn" onClick={this.loginOut}>登出</div>
        <div className="btn result" onClick={this.result}>结果</div>
      </div>
    )
  }
}