// @flow
import { createStore } from 'redux';
import { applicationReducer } from './reducers';

import type { Store } from 'redux';
import type { ApplicationState} from './reducers';



export const store: Store<ApplicationState> = createStore(
    applicationReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);