import React from 'react'
import './style.css'
import { store } from '../../store/store.js'
import { ADD } from '../../store/action.js'
import { ADD_ACTION } from '../../store/action-creators'

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    console.log(store.getState())
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
  //空
  confirmData = (data) => {
    let res = false
    for (let item in data) {
      if (!data[item]) {
        res = true
      }
    }
    console.log('res:' + res)
    return res
  }
  listerner = () => {
    let newState = store.getState();
    this.setState(newState);
  }
  loginIn = (e) => {

    const { userID, username, password } = this.state

    let data = {
      userID: userID,
      username: username,
      password: password
    }

    if (this.confirmData(data)) {
      console.log('空')
      return
    }
    // const action = {
    //   type: ADD,
    //   value: data
    // }
    const action = ADD_ACTION(data)
    store.dispatch(action)

    store.subscribe(this.listerner)
    console.log(this.state)
    console.log('提交')

  }
  render() {
    const { userID } = this.state
    return (
      <div className="login">
        <div className="title">注册</div>
        <div className="input-wrap">
          <label htmlFor="user" className="input-title">用户名:</label>
          <input id="user"
            className="input"
            onChange={this.userChange}
          />
        </div>
        <div className="input-wrap">
          <label htmlFor="password" className="input-title">密 码:</label>
          <input id="password"
            className="input"
            onChange={this.passwordChange}
          />
        </div>
        <div>{userID}</div>
        <div className="btn" onClick={this.loginIn}>注册</div>
      </div>
    )
  }
}