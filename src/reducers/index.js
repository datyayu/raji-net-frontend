import { combineReducers } from 'redux';
import { Reducer } from 'redux';
import { SidenavState, sidenavReducer } from './sidenav-reducer';


// Export application global state
export type ApplicationState = {
    sidenav: SidenavState
}

export const applicationReducer: Reducer<ApplicationState> = 
    combineReducers({
        sidenav: sidenavReducer,
    });