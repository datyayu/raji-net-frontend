// @flow
import type { ApplicationState } from '../reducers';
import type { LinkType } from '../types';


export class SidenavSelectors {
    static isActive(state: ApplicationState): boolean {
        return state.sidenav.isOpen;
    }

    static getLinks(state: ApplicationState): LinkType[] {
        return state.sidenav.links;
    }
}
