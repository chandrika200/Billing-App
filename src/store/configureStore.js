import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import userReducer from '../reducers/userReducer'
import billingReducer from '../reducers/billingReducers'
const configureStore = () =>{
    const store = createStore(combineReducers({
        user : userReducer,
        details:billingReducer
    }),composeWithDevTools(applyMiddleware(thunk)))
    console.log('updated store',store)
    return store
    
    }

export default configureStore