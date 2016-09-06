import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Main from './modules/Main'
import Albums from './modules/Albums'

render((
  <Router history={ browserHistory }>
    <Route path="/" component={ Main }>
      <Route path="/Albums/:title" component={ Albums }/>
    </Route>
  </Router>
), document.getElementById('app'))
