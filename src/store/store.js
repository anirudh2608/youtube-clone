// import { createStore, applyMiddleware } from "redux"

// import { composeWithDevTools } from "redux-devtools-extension"

// import createSagaMiddleware from 'redux-saga'


// const sagaMiddleware = createSagaMiddleware()

// import { rootReducer } from "./root-reducer"
// import { rootSaga } from "./root-saga"

// // const store = createStore(rootReducer, undefined)
// const store = createStore(rootReducer, undefined, composeWithDevTools(applyMiddleware(sagaMiddleware)))

// export default store

// sagaMiddleware.run(rootSaga)



import {
    compose,
    createStore,
    applyMiddleware
} from "redux"


import { logger } from "redux-logger"

import createSagaMiddleware from 'redux-saga'

import { rootReducer } from "./root-reducer"
import { rootSaga } from "./root-saga"


const sagaMiddleware = createSagaMiddleware()

const middlerWare = [
    process.env.NODE_ENV !== 'production' && logger,
    sagaMiddleware,
  ].filter(Boolean);

const composedEnhancers = compose(applyMiddleware(...middlerWare))

export const store = createStore(rootReducer, undefined, composedEnhancers)


sagaMiddleware.run(rootSaga)


