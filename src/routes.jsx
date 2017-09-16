import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route, Router, Switch } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import App from './app/AppComponent'
import AuthService from './auth/AuthService'
import { Login } from './auth/AuthComponent'
import GitHub from './github/GitHubContainer'

const auth = new AuthService()
const history = createBrowserHistory()

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      auth.isAuthenticated() ? (
        <Component {...props} auth={auth} />
      ) : (
        /* eslint-disable react/prop-types */
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location }
          }}
        />
        /* eslint-enable react/prop-types */
      )}
  />
)

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired
}

const NotFound = ({ location }) => (
  <div>
    <h3>
      Page not found <code>{location.pathname}</code>
    </h3>
  </div>
)

NotFound.propTypes = {
  location: PropTypes.object.isRequired
}

export default function() {
  return (
    <Router history={history}>
      <Switch>
        <PrivateRoute exact path="/" component={App} />
        <Route
          path="/login"
          render={props => <Login auth={auth} {...props} />}
        />
        <Route path="/github" component={GitHub} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}
