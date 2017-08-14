// Application entrypoint. Load up the application styles
require("./styles/application.scss");

import React from 'react'
import {render} from 'react-dom'
import {Router, Route, hashHistory, IndexRoute} from 'react-router'
import {Link} from 'react-router'

import App from './src/components/App'
import Home from './src/components/Home'
import User from './src/components/User'

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/user/:id" component={User}/>
    </Route>
  </Router>
), document.getElementById('root'))
