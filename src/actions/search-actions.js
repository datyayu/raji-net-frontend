// @flow
import type { Action } from 'redux';


export class SearchActions {
    static SET_SEARCH_VALUE = '[Search] SET_SEARCH_VALUE';
    static setSearchValue(evt: Event): Action {
        const inputBox = (evt.target : any); // <any> because evt.target cannot be casted to an <HTMLInputElement>
        const newValue = inputBox.value;

        return (
            { type: SearchActions.SET_SEARCH_VALUE
            , payload: newValue
            }
        );
    }

    static SHOW_MOBILE_SEARCH = '[Search] SHOW_MOBILE_SEARCH';
    static showMobileSearch(): Action {
        return { type: SearchActions.SHOW_MOBILE_SEARCH };
    };

    static HIDE_MOBILE_SEARCH = '[Search] HIDE_MOBILE_SEARCH';
    static hideMobileSearch(): Action {
        return { type: SearchActions.HIDE_MOBILE_SEARCH };
    };
}
