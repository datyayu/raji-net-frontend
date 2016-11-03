// @flow
import type { ApplicationState } from '../reducers';


export class ApplicactionSelectors {
    static pageHasPlaylist(state: ApplicationState): boolean {
        return state.routing.hasPlaylist;
    }

    static getPageTitle(state: ApplicationState): string {
        return state.routing.pageTitle;
    }
}