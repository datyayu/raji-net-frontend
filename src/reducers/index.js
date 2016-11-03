// @flow
import type { Reducer } from 'redux';
import type { SidenavState } from './sidenav-reducer';
import type { RoutingState } from './routing-reducer';
import type { SeriesListState } from './series-list-reducer';
import type { SeriesState } from './series-reducer';

import { combineReducers } from 'redux';

import { sidenavReducer } from './sidenav-reducer';
import { routingReducer } from './routing-reducer';
import { seriesListReducer } from './series-list-reducer';
import { seriesReducer } from './series-reducer';


// Export application global state
export type ApplicationState = 
    { sidenav: SidenavState
    , routing: RoutingState
    , seriesList: SeriesListState
    , series: SeriesState
    }
;


export const applicationReducer: Reducer<ApplicationState> =
    combineReducers(
        { sidenav: sidenavReducer
        , routing: routingReducer
        , seriesList: seriesListReducer 
        , series: seriesReducer
        }
    );