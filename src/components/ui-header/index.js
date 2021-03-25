import { requredData } from '../../store/action-creators'
import { AXIOS_REQUIRE_ACTION } from '../../store/action-creators'
import React, { Component } from 'react';
import { store } from '../../store/store';
import { ls } from '../../utils/require'


class UiHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: ''
    }
  }
  componentDidMount() {

    this.loadData()
  }
  loadData = async () => {
    let data = await ls
    this.setState({
      data
    })
    console.log(data)
  }
  listen = () => {
    let data = store.getState()
    this.setState({
      data
    })
    console.log(data)
  }
  setStateData = () => {
    const { data } = this.state
    console.log(data)
    const action = AXIOS_REQUIRE_ACTION(data)

    store.dispatch(action)

  }
  getStateData = () => {
    store.subscribe(this.listen)
  }
  render() {
    const { title } = this.props
    return (
      <div className="header">
        {title}
        <button
          onClick={this.setStateData}
        >按</button>
        <button
          onClick={this.getStateData}
        >按</button>
      </div>
    );
  }
}

export default UiHeader;