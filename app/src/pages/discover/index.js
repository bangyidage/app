import React, { Component } from 'react';
import App from '../../components/tabbar';
class Discover extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    console.log('1')
    return (
      <div>discover
        <App />
      </div>
    );
  }
}

export default Discover;