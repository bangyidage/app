import React from 'react'
import './style.css'
import Login from '../../components/login'

export default class Home extends React.Component {

  render() {
    return (
      <div className="home">
        <Login
        />
      </div>
    )
  }
}