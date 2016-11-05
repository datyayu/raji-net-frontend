// @flow
import type { Reducer } from 'redux';
import type { SidenavState } from './sidenav-reducer';
import type { RoutingState } from './routing-reducer';
import type { SeriesListState } from './series-list-reducer';
import type { SeriesState } from './series-reducer';
import type { SeasonsState } from './seasons-reducer';
import type { ReleaseState } from './release-reducer';
import type { SearchState } from './search-reducer';
import type { PlaylistListState } from './playlist-list-reducer';
import type { PlaylistState } from './playlist-reducer';
import type { PlayerState } from './player-reducer';

import { combineReducers } from 'redux';

import { sidenavReducer } from './sidenav-reducer';
import { routingReducer } from './routing-reducer';
import { seriesListReducer } from './series-list-reducer';
import { seriesReducer } from './series-reducer';
import { seasonsReducer } from './seasons-reducer';
import { releaseReducer } from './release-reducer';
import { searchReducer } from './search-reducer';
import { playlistListReducer } from './playlist-list-reducer';
import { playlistReducer } from './playlist-reducer';
import { playerReducer } from './player-reducer';


// Export application global state
export type ApplicationState = 
    { sidenav: SidenavState
    , routing: RoutingState
    , seriesList: SeriesListState
    , series: SeriesState
    , seasons: SeasonsState
    , release: ReleaseState
    , playlistList: PlaylistListState
    , search: SearchState
    , playlist: PlaylistState
    , player: PlayerState
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
        , search: searchReducer
        , playlist: playlistReducer
        , player: playerReducer
        }
    );