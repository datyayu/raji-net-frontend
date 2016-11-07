// @flow
import type { ApplicationState } from '../reducers';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { SidenavActions } from '../actions';
import { SidenavSelectors } from '../selectors';


export function SidenavContainer(WrappedComponent: ReactClass<any>): ReactClass<any> {
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
}
