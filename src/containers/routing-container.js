// @flow
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { RoutingSelectors } from '../selectors';
import { RoutingActions } from '../actions';

import type { ApplicationState } from '../reducers';


export function RoutingContainer(WrappedComponent: ReactClass<any>) {
    function mapStateToProps(state: ApplicationState) {
        return (
            { action: RoutingSelectors.getAction(state)
            , location: RoutingSelectors.getLocation(state)
            }
        );
    }

    function mapActionsToProps(dispatch) {
        return bindActionCreators(
            { onChange: RoutingActions.navigateTo
            }
        , dispatch);
    }

    return connect(mapStateToProps, mapActionsToProps)(WrappedComponent);
};
