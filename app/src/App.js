import { Component, Fragment } from 'react';
import './App.css'
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from './pages/Home'
import Person from './pages/Person'
import Msg from './pages/msg'
import Discover from './pages/discover'
import NoMatch from './pages/NoMatch'
import HomeImg from './imgs/selected/index.png'
import DiscoverImg from './imgs/selected/discover.png'
import MsgImg from './imgs/selected/msgs.png'
import PersonImg from './imgs/selected/person.png'
import Login from './pages/login';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount() {

  }
  pathTo = (pathData, e) => {
    if (window.location.pathname === pathData)
      return
    window.location.replace(pathData)
  }

  render() {
    console.log('阻止默认')
    return (
      <Fragment>
        <BrowserRouter>
          <div className="tabs">
            <div className="tab" onClick={this.pathTo.bind(this, "/")}><img src={HomeImg} alt="首页" />首页 </div>
            <div className="tab" onClick={this.pathTo.bind(this, "/discover")}><img src={DiscoverImg} alt="发现" /> 发现</div>
            <div className="tab" onClick={this.pathTo.bind(this, "/msg")}><img src={MsgImg} alt="消息" /> 消息</div>
            <div className="tab" onClick={this.pathTo.bind(this, "/person")}><img src={PersonImg} alt="我的" /> 我的</div>
          </div>

          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/discover" component={Discover}></Route>
            <Route exact path="/msg" component={Msg}></Route>
            <Route exact path="/person" component={Person}></Route>
            <Route path="*" component={NoMatch}></Route>
          </Switch>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;