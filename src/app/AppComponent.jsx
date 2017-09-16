import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import Header from './HeaderComponent'
import GitHub from '../github/GitHubContainer'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

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

export default function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/github" component={GitHub} />
        <Route component={NotFound} />
      </Switch>
      <div>footer</div>
    </div>
  )
}
