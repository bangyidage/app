import React, { Component } from 'react'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const { mobile } = this.state
    return (
      <div className="login">
        <div className='form-wrap'>
          <div className='input-title'>用户名</div>
          <div className='input-wrap'>
            <input className='input-self'
              placeholder='用户名'
              maxLength={20}
              value={mobile}
            />
          </div>
        </div>
        <div className='form-wrap'>
          <div className='input-title'>密码</div>
          <div className='input-wrap'>
            <input className='input-self'
              placeholder='用户名'
              maxLength={20}

              value={mobile}
            />
          </div>
        </div>
        <div
          className='address-button'
          onClick={this.submitData}
        >
          提交
          </div>
      </div>
    );
  }
}

export default Login;
