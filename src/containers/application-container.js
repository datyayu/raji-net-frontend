// @flow
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { ApplicationSelectors } from '../selectors';
import { SearchActions } from '../actions';

import type { ApplicationState } from '../reducers';



export function ApplicationContainer(WrappedComponent: ReactClass<any>): ReactClass<any> {
    function mapStateToProps(state: ApplicationState) {
        return (
            { hasPlaylist: ApplicationSelectors.pageHasPlaylist(state)
            , hasSearch: ApplicationSelectors.pageHasSearch(state)
            , showSearchOnMobile: ApplicationSelectors.showMobileSearch(state)
            , title: ApplicationSelectors.getPageTitle(state)
            , isFetching: ApplicationSelectors.isFetching(state)
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
