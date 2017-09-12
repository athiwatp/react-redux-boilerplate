import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Header from './HeaderComponent.jsx'
import GitHub from '../github/GitHubContainer.jsx'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/github" component={GitHub} />
        <div>footer</div>
      </div>
    )
  }
}
