import React, { Component } from 'react';
import App from '../../components/tabbar';
class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>person
        <App />
      </div>
    );
  }
}

export default Person;