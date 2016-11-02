// @flow
import type { LinkModel } from '../models';
import { ApplicationState } from '../reducers';


export class SidenavSelectors {
    static isActive(state: ApplicationState): boolean {
        return state.sidenav.isOpen;
    }

    static getLinks(state: ApplicationState): LinkModel[] {
        return state.sidenav.links;
    }
}