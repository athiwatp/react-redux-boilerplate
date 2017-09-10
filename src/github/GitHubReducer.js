import {
  GITHUB_REPOSITORY_CLEAR,
  GITHUB_REPOSITORY_FAILURE,
  GITHUB_REPOSITORY_REQUEST,
  GITHUB_REPOSITORY_SUCCESS
} from './GitHubActionTypes'

const initialState = {
  repositories: [
    { name: "name1", link: "link1", star: 1},
    { name: "name2", link: "link2", star: 2}
  ]
}

export default function github (state = initialState, action) {
  switch (action.type) {
    case GITHUB_REPOSITORY_REQUEST:
      return state
    case GITHUB_REPOSITORY_SUCCESS:
      return state
    case GITHUB_REPOSITORY_FAILURE:
      return state
    case GITHUB_REPOSITORY_CLEAR:
      return Object.assign({}, state, {
        repositories: []
      })
    default:
      return state
  }
}
