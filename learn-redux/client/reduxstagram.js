import React from 'react';
import ReactDOM from 'react-dom';

import Main from './components/Main';
import Single from './components/Single';
import Photogrid from './components/Photogrid';

import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

const App = React.createClass({
  render() {
    return (
      <div>App</div>
    )
  }
})

import css from './styles/style.styl'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Photogrid} />
      <Route path="/view/:postId" component={Single} />
    </Route>
  </Router>
), document.getElementById('root'))
