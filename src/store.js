// @flow
import type { Store } from 'redux';
import type { ApplicationState} from './reducers';

import { createStore, applyMiddleware, compose } from 'redux';
import { applicationReducer } from './reducers';
import createSagaMiddleware from 'redux-saga'
import { sagas } from './sagas'

const sagaMiddleware = 
    createSagaMiddleware();

const composeEnhancers = 
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = 
    composeEnhancers(applyMiddleware(sagaMiddleware));
    


export const store: Store<ApplicationState> =
    createStore(applicationReducer, middleware);


sagas.forEach(saga => sagaMiddleware.run(saga));