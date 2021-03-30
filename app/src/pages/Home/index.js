import React, { Component } from 'react';


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
  }
  componentDidMount() {
    console.log(this.props)
  }

  render() {
    console.log(this.state)

    return (
      <div >
        <h3>home</h3>
        <input
          type="text"
          onChange={this.nameChange}
        />
        <div onClick={this.submitData}>点</div>
      </div>
    );
  }
}
