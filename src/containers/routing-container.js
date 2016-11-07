// @flow
import type { ApplicationState } from '../reducers';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { RoutingActions } from '../actions';
import { RoutingSelectors } from '../selectors';


export function RoutingContainer(WrappedComponent: ReactClass<any>): ReactClass<any> {
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
}
