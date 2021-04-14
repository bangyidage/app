import React, { Component, Fragment } from 'react'
import Title from '../../components/Title';
import './style.css'


const MOBILE_PATTERN = /^[0-9]*$/
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
    if (inputName === 'account' && !MOBILE_PATTERN.test(value)) {
      return
    }
    this.setState({
      [inputName]: value && value.trim()
    })

  }
  submitData = () => {
    const { account, pwd } = this.state
    if (account.length > 6) {

    }
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
