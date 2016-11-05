// @flow
import type { ApplicationState } from '../reducers';


export class ApplicationSelectors {
    static pageHasPlaylist(state: ApplicationState): boolean {
        return state.routing.hasPlaylist;
    }


    static pageHasSearch(state: ApplicationState): boolean {
        return state.routing.hasSearch;
    }


    static showMobileSearch(state: ApplicationState): boolean {
        return state.search.showOnMobile;
    }

    static getPageTitle(state: ApplicationState): string {
        return state.routing.pageTitle;
    }

    static isFetching(state: ApplicationState): boolean {
        return (
            state.playlistList.isFetching ||
            state.release.isFetching ||
            state.seasons.isFetching ||
            state.series.isFetching ||
            state.seriesList.isFetching
        );
    }
}