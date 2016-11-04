import { ApplicationState } from '../reducers'


export class SearchSelectors {
    static getSearchValue(state: ApplicationState): string {
        return state.search.searchValue;
    }
}