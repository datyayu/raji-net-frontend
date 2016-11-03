import type { Reducer } from 'redux';
import { combineReducers } from 'redux';

import { SidenavState, sidenavReducer } from './sidenav-reducer';
import { RoutingState, routingReducer } from './routing-reducer';


// Export application global state
export type ApplicationState = 
    { sidenav: SidenavState
    , routing: RoutingState
    }

export const applicationReducer: Reducer<ApplicationState> =
    combineReducers(
        { sidenav: sidenavReducer
        , routing: routingReducer
        }
    );