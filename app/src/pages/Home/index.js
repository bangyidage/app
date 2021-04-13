import React, { Component } from 'react';
import { store } from '../../store/store'
import { ActionLogin } from '../../store/action-creator'
import axios from 'axios'
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      userId: ''
    }

  }
  async componentDidMount() {

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
    axios.get('http://localhost:7002/').then((res) => {
      console.log(res)
    }).catch((e) => {
      console.log(e)
    })
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