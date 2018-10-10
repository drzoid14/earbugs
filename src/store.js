
import {createStore, combineReducers, applyMiddleware} from 'redux';

import videoReducer from './reducers';

import thunk from 'redux-thunk'

import {reducer as formReducer} from 'redux-form';

export default createStore(
    combineReducers({
        form: formReducer,
        videoReducer: videoReducer
    }),
    applyMiddleware(thunk)
)
