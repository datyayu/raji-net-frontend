// @flow
import type { Reducer } from 'redux';
import type { SidenavState } from './sidenav-reducer';
import type { RoutingState } from './routing-reducer';
import type { SeriesListState } from './series-list-reducer';
import type { SeriesState } from './series-reducer';
import type { SeasonsState } from './seasons-reducer';
import type { ReleaseState } from './release-reducer';
import type { PlaylistListState } from './playlist-list-reducer';

import { combineReducers } from 'redux';

import { sidenavReducer } from './sidenav-reducer';
import { routingReducer } from './routing-reducer';
import { seriesListReducer } from './series-list-reducer';
import { seriesReducer } from './series-reducer';
import { seasonsReducer } from './seasons-reducer';
import { releaseReducer } from './release-reducer';
import { playlistListReducer } from './playlist-list-reducer';


// Export application global state
export type ApplicationState = 
    { sidenav: SidenavState
    , routing: RoutingState
    , seriesList: SeriesListState
    , series: SeriesState
    , seasons: SeasonsState
    , release: ReleaseState
    , playlistList: PlaylistListState
    }
;


export const applicationReducer: Reducer<ApplicationState> =
    combineReducers(
        { sidenav: sidenavReducer
        , routing: routingReducer
        , seriesList: seriesListReducer 
        , series: seriesReducer
        , seasons: seasonsReducer
        , release: releaseReducer
        , playlistList: playlistListReducer
        }
    );