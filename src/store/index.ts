import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'

import rootReducer from './rootReducer'
import { rootSaga } from './rootSaga'

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Mount it on the Store
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware, logger))
)

// Run the saga
sagaMiddleware.run(rootSaga)

export default store
