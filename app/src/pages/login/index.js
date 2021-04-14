import React, { Component, Fragment } from 'react'
import Title from '../../components/Title';
import './style.css'
import { message, Button, Space } from 'antd'
import { register } from '../../net/index'
import axios from 'axios'


//数字
const ACCOUNT_PATTERN = /^[0-9]*$/
//以字母开头，长度在6~18之间，只能包含字母、数字和下划线
const PWD_PATTERN = /^[a-zA-Z]\w{5,17}$/

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: '',
      pwd: ''
    }
  }
  formDataChange = (inputName, e) => {
    let value = e.target.value
    if (inputName === 'account' && !ACCOUNT_PATTERN.test(value)) {
      message.warning('请输入数字')
      return
    }
    this.setState({
      [inputName]: value && value.trim()
    })

  }
  submitData = () => {
    const { account, pwd } = this.state

    if (account.length < 6) {
      message.warning('学号长度不能小于6位')
      return
    }

    if (pwd.length < 6 || !PWD_PATTERN.test(pwd)) {
      message.warning('密码以字母开头，长度在6~16之间，只能包含字母、数字和下划线')
      console.log(pwd.length)
      return
    }
    this.confirm(account, pwd)
  }

  confirm = async (account, pwd) => {
    await register({ account, pwd }).then((res = {}) => {
      console.log(res)
    }).catch(error => {
      console.log(error)
    })
  }
  render() {
    const { account, pwd } = this.state
    return (
      <Fragment>
        <div className="login">
          <h2 className="title">注册</h2>
          <div className='form-wrap account'>
            <div className='input-title'>学号</div>
            <div className='input-wrap'>
              <input className='input-self'
                placeholder='请输入您的学号'
                maxLength={20}
                value={account}
                onChange={this.formDataChange.bind(this, 'account')}
              />
            </div>
          </div>
          <div className='form-wrap '>
            <div className='input-title'>密码</div>
            <div className='input-wrap'>
              <input className='input-self'
                placeholder='请输入您的密码'
                maxLength={16}
                value={pwd}
                onChange={this.formDataChange.bind(this, 'pwd')}
              />
            </div>
          </div>
        </div>
        <div
          className='confirm-btn'
          onClick={this.submitData}
        >
          提交
          </div>

      </Fragment>

    );
  }
}

export default Login;
