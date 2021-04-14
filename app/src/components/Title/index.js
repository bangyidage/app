import React, { Component } from 'react';
import './style.css'
class Title extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '' }
  }
  render() {
    const { title, isShowBack } = this.props
    return (
      <div className="header">
        {isShowBack && <div className="header-back"></div>}
        <div className="title">{title}</div>
      </div>
    );
  }
}

export default Title;
