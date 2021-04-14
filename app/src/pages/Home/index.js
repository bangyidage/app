import React, { Component } from 'react';
import { store } from '../../store/store'
import { ActionLogin } from '../../store/action-creator'
import axios from 'axios'
import App from '../../components/tabbar';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      userId: 0
    }

  }
  async componentDidMount() {
    const { userId } = this.state
    if (userId === 0) {
      window.location.replace(`/login`)
      return
    }
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
      <div>
        <App />
      </div>


    );
  }
}
export default Home