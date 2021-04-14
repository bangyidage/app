import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/tabbar';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { store } from './store/store'
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from './pages/Home'
import Person from './pages/Person'
import Msg from './pages/msg'
import Discover from './pages/discover'
import NoMatch from './pages/NoMatch'
import Login from './pages/login';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/discover" component={Discover}></Route>
          <Route exact path="/msg" component={Msg}></Route>
          <Route exact path="/person" component={Person}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route path="*" component={NoMatch}></Route>
        </Switch>
      </BrowserRouter>
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
