import React, { Component } from 'react';
import App from '../../components/tabbar';
import { store } from '../../store/store'
class Msg extends Component {
  constructor(props) {
    super(props);
    this.state = { data: '' }
  }
  listener = () => {

  }
  redi = () => {
    console.log(store.getState())
  }
  render() {
    return (
      <div>{this.state.data}
        <button onClick={this.redi}>啦啦啦</button>
        <App />
      </div>
    );
  }
}

export default Msg;