import React from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import { App, ErrorNotFound } from './app'
import { Login, PrivateRoute } from './auth/AuthComponent'
import GitHub from './github/GitHubContainer'

const history = createBrowserHistory()

export default function() {
  return (
    <Router history={history}>
      <Switch>
        <PrivateRoute exact path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/github" component={GitHub} />
        <Route component={ErrorNotFound} />
      </Switch>
    </Router>
  )
}
