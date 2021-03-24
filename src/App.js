import React from 'react'
import { HashRouter, Link, Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import Video from './pages/video'
import People from './pages/peoper'
import Message from './pages/message'
import { ROUTERS } from './utils/route.js'
import './App.css'

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <div className="tabs">
            {
              ROUTERS.map((item) => {
                const { path, iconPath, name } = item
                return (
                  <Link className="tab" to={path} key={path}>
                    <img className="tab-imgs" src={iconPath} alt={name} />
                    <div>{name}</div>
                  </Link>
                )
              })
            }
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/video" component={Video} />
            <Route exact path="/message" component={Message} />
            <Route exact path="/people" component={People} />
          </Switch>

        </HashRouter>
      </div>
    )
  }
}