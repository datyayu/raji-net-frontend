// @flow
import type { Action } from 'redux';
import type { LinkType } from '../types';

import { SidenavActions, RoutingActions } from '../actions';


export type SidenavState =
    { isOpen: boolean
    , activeLink: ?string
    , links: LinkType[]
    }
;

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
;


export function sidenavReducer(state: SidenavState = initialState, action: Action): SidenavState {
    switch(action.type) {
        case SidenavActions.OPEN_SIDENAV:
            return (
                {...state
                , isOpen: true
                }
            );


        case SidenavActions.CLOSE_SIDENAV:
            return (
                {...state
                , isOpen: false
                }
            );


        case RoutingActions.NAVIGATE:
            const currentPath =  action.payload.location.pathname;
            const matchedPage = state.links.find(link => link.href === currentPath);

            return (
                {...state
                , activeLink: matchedPage && matchedPage.href
                , isOpen: false
                }
            );


        default:
            return state;
    }
}
