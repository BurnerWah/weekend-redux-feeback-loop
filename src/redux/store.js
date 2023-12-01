import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux'
import logger from 'redux-logger'
import { comments, feeling, supported, understanding } from './reducers'

const store = createStore(
  combineReducers({
    feeling,
    understanding,
    supported,
    comments,
  }),
  applyMiddleware(logger),
)

export default store
