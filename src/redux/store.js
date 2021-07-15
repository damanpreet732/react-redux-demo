import { combineReducers, createStore, applyMiddleware } from 'redux'
// import reduxThunk from 'redux-thunk'

import cakeReducer from './cake/cakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'

const rootReducer = combineReducers({
    cake : cakeReducer,
    iceCream : iceCreamReducer
})

export const store = createStore(rootReducer, applyMiddleware())