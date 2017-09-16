import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import DevTools from '../DevTools'
import axios from './axiosMiddleware'

const enhancer = compose(applyMiddleware(thunk, axios), DevTools.instrument())

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer)

  if (module.hot) {
    /* eslint-disable global-require */
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers').default)
    )
    /* eslint-disable global-require */
  }

  return store
}
