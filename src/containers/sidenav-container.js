// @flow
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { SidenavSelectors } from '../selectors';
import { SidenavActions } from '../actions';

import type { ApplicationState } from '../reducers';


export function SidenavContainer(WrappedComponent: ReactClass<any>) {
    function mapStateToProps(state: ApplicationState) {
        return (
            { links: SidenavSelectors.getLinks(state)
            , isActive: SidenavSelectors.isActive(state)
            }
        );
    }

    function mapActionsToProps(dispatch) {
        return bindActionCreators(
            { openSidenav: SidenavActions.openSidenav
            , closeSidenav: SidenavActions.closeSidenav
            }
        , dispatch);
    }

    return connect(mapStateToProps, mapActionsToProps)(WrappedComponent);
};
