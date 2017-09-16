import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Repository from './RepositoryComponent'

export default class GitHub extends Component {
  constructor(props) {
    super(props)
    this.loadRepositories = this.loadRepositories.bind(this)
    this.clearRepositories = this.clearRepositories.bind(this)
  }

  loadRepositories() {
    this.props.onLoadRepositories('niqdev')
  }

  clearRepositories() {
    this.props.onClearRepositories()
  }

  render() {
    return (
      <div>
        <div>GitHub</div>
        <button onClick={this.loadRepositories}>REQUEST</button>
        <button onClick={this.clearRepositories}>CLEAR</button>
        {this.props.repositories.map(repository => (
          <Repository
            key={repository.name}
            name={repository.name}
            link={repository.link}
            star={repository.star}
          />
        ))}
      </div>
    )
  }
}

GitHub.propTypes = {
  repositories: PropTypes.array.isRequired,
  onLoadRepositories: PropTypes.func.isRequired,
  onClearRepositories: PropTypes.func.isRequired
}

GitHub.defaultProps = {
  repositories: []
}
