import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import GitHubComponent from './GitHubComponent'
import { loadRepositories, clearRepositories } from './GitHubActions'

function GitHub({ repositories, actions }) {
  return (
    <GitHubComponent
      repositories={repositories}
      onLoadRepositories={actions.loadRepositories}
      onClearRepositories={actions.clearRepositories}
    />
  )
}

GitHub.propTypes = {
  repositories: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    repositories: state.github.repositories
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // https://gist.github.com/markerikson/f46688603e3842af0f9720dea05b1a9e
    actions: bindActionCreators(
      { loadRepositories, clearRepositories },
      dispatch
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GitHub)
