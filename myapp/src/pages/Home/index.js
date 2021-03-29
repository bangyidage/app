import React, { Component } from 'react';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      his: 1
    }
  }
  componentDidMount() {
    console.log(this.props)

  }
  h = () => {


    return
  }
  render() {
    return (
      <div onClick={this.h}>home
    
      </div>
    );
  }
}

export default Home;