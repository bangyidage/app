import React, { Component } from 'react';
import UiHeader from '../ui-header';
class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const { title } = this.props
    return (
      <div className="page">
        <UiHeader
          title={title}
        />
      </div>
    );
  }
}

export default Page;