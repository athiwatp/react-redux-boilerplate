import {
  GITHUB_REPOSITORIES,
  GITHUB_REPOSITORIES_CLEAR
} from './GitHubActionTypes'

const initialState = {
  repositories: []
}

const emptyRepositories = state =>
  Object.assign({}, state, {
    repositories: []
  })

export default function github(state = initialState, action) {
  switch (action.type) {
    case GITHUB_REPOSITORIES:
      return emptyRepositories(state)
    case `${GITHUB_REPOSITORIES}_SUCCESS`:
      return Object.assign({}, state, {
        repositories: (action.payload.data || []).map(item => ({
          id: item.id,
          name: item.name,
          link: item.html_url,
          star: item.stargazers_count
        }))
      })
    case `${GITHUB_REPOSITORIES}_FAIL`:
      return emptyRepositories(state)
    case GITHUB_REPOSITORIES_CLEAR:
      return emptyRepositories(state)
    default:
      return state
  }
}
