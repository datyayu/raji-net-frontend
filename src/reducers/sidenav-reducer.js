// @flow
import type { Action } from 'redux';
import type { LinkModel } from '../models';

import { SidenavActions } from '../actions';


export type SidenavState = 
    { isOpen: boolean
    , activeLink: ?string
    , links: LinkModel[]
    }


const initialState: SidenavState = 
    { isOpen: false
    , activeLink: null
    , links:  
        [
            { text: 'now playing', href: '/player' },
            { text: 'series',      href: '/series' },
            { text: 'playlists',   href: '/playlists' },
            { text: 'seasons',     href: '/seasons' },
        ]
    }


export function sidenavReducer(state: SidenavState = initialState, action: Action): SidenavState {
    switch(action.type) {
        case SidenavActions.OPEN_SIDENAV:
            return {...state, isOpen: true };


        case SidenavActions.CLOSE_SIDENAV:
            return { ...state, isOpen: false };


        default:
            return state;
    }
}