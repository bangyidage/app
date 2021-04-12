import React, { Component } from 'react';
import { store } from '../../store/store'
import { ActionLogin } from '../../store/action-creator'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      userId: ''
    }

  }
  componentDidMount() {

  }
  listener = () => {
    let data = store.getState()
    console.log(data)
    this.setState({
      ...data
    })
  }
  nameChange = () => {

  }
  submitData = () => {
    let value = {
      userId: 5
    }
    store.dispatch(
      ActionLogin(value)
    )
    store.subscribe(this.listener);
    window.location.replace('/msg')
  }
  render() {
    const { userId } = this.state
    console.log(this.props)
    return (
      <div >
        <h3>home</h3>
        <input
          type="text"
          onChange={this.nameChange}
          value={userId}
        />
        <div onClick={this.submitData}>点</div>
      </div>
    );
  }
}
export default Home