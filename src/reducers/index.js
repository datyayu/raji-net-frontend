// @flow
import type { Reducer } from 'redux';

import type { PlayerState } from './player-reducer';
import type { PlaylistState } from './playlist-reducer';
import type { PlaylistListState } from './playlist-list-reducer';
import type { ReleaseState } from './release-reducer';
import type { RoutingState } from './routing-reducer';
import type { SearchState } from './search-reducer';
import type { SeasonsState } from './seasons-reducer';
import type { SeriesState } from './series-reducer';
import type { SeriesListState } from './series-list-reducer';
import type { SidenavState } from './sidenav-reducer';


import { combineReducers } from 'redux';

import { playerReducer } from './player-reducer';
import { playlistReducer } from './playlist-reducer';
import { playlistListReducer } from './playlist-list-reducer';
import { releaseReducer } from './release-reducer';
import { routingReducer } from './routing-reducer';
import { searchReducer } from './search-reducer';
import { seasonsReducer } from './seasons-reducer';
import { seriesReducer } from './series-reducer';
import { seriesListReducer } from './series-list-reducer';
import { sidenavReducer } from './sidenav-reducer';


// Export application global state
export type ApplicationState =
    { player: PlayerState
    , playlist: PlaylistState
    , playlistList: PlaylistListState
    , release: ReleaseState
    , routing: RoutingState
    , search: SearchState
    , seasons: SeasonsState
    , series: SeriesState
    , seriesList: SeriesListState
    , sidenav: SidenavState
    }
;

export const applicationReducer: Reducer<ApplicationState> =
    combineReducers(
        { player: playerReducer
        , playlist: playlistReducer
        , playlistList: playlistListReducer
        , release: releaseReducer
        , routing: routingReducer
        , search: searchReducer
        , seasons: seasonsReducer
        , series: seriesReducer
        , seriesList: seriesListReducer
        , sidenav: sidenavReducer
        }
    )
;
