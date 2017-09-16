import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route, withRouter } from 'react-router-dom'
import AuthService from './AuthService'

class Login extends Component {
  constructor(props) {
    super(props)
    this.login = this.login.bind(this)
    this.state = {
      redirectToReferrer: false
    }
  }

  login() {
    AuthService.login(() => {
      this.setState({ redirectToReferrer: true })
    })
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state

    if (redirectToReferrer) {
      return <Redirect to={from} />
    }

    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Login</button>
      </div>
    )
  }
}

Login.propTypes = {
  location: PropTypes.object.isRequired
}

const Logout = withRouter(({ history }) => (
  <button
    onClick={() => {
      AuthService.logout(() => history.push('/'))
    }}>
    Logout
  </button>
))

const PrivateRoute = ({ component: AuthenticatedComponent, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      AuthService.isAuthenticated() ? (
        <AuthenticatedComponent {...props} />
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

export { Login, Logout, PrivateRoute }
