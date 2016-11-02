// @flow
import type { Action } from 'redux';


export class SidenavActions {
    static OPEN_SIDENAV = '[Sidenav] OPEN_SIDENAV';
    static openSidenav(): Action {
        return { type: SidenavActions.OPEN_SIDENAV };
    }

    static CLOSE_SIDENAV = '[Sidenav] CLOSE_SIDENAV';
    static closeSidenav(): Action {
        return { type: SidenavActions.CLOSE_SIDENAV };
    }
}