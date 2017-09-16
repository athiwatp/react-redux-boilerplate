import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect, withRouter } from 'react-router-dom'

class Login extends Component {
  constructor(props) {
    super(props)
    this.login = this.login.bind(this)
    this.state = {
      redirectToReferrer: false
    }
  }

  login() {
    this.props.auth.login(() => {
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
  location: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
}

const Logout = withRouter(({ history, auth }) => (
  <button
    onClick={() => {
      auth.logout(() => history.push('/'))
    }}>
    Logout
  </button>
))

Logout.propTypes = {
  auth: PropTypes.object.isRequired
}

export { Login, Logout }
