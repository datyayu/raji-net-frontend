// @flow
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { ApplicationSelectors } from '../selectors';
import { SearchActions } from '../actions';

import type { ApplicationState } from '../reducers';



type ApplicationContainerProps = {
    hasPlaylist: boolean;
    hasSearch: boolean;
    title: string;
}


export function ApplicationContainer(WrappedComponent: ReactClass<any>): ReactClass<ApplicationContainerProps> {
    function mapStateToProps(state: ApplicationState) {
        return (
            { hasPlaylist: ApplicationSelectors.pageHasPlaylist(state)
            , hasSearch: ApplicationSelectors.pageHasSearch(state)
            , showSearchOnMobile: ApplicationSelectors.showMobileSearch(state)
            , title: ApplicationSelectors.getPageTitle(state)
            }
        );
    }

    function mapActionsToProps(dispatch) {
        return bindActionCreators(
            { showSearch: SearchActions.showMobileSearch
            , hideSearch: SearchActions.hideMobileSearch
            }
        , dispatch);
    }


    return connect(mapStateToProps, mapActionsToProps)(WrappedComponent);
};
