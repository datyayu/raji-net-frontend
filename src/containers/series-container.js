// @flow
import type { ApplicationState } from '../reducers';

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { SeriesActions } from '../actions';
import { SeriesSelectors, RoutingSelectors } from '../selectors';


export function SeriesContainer(WrappedComponent: ReactClass<any>): ReactClass<any> {
    function mapStateToProps(state: ApplicationState) {
        return (
            { seriesId: RoutingSelectors.getIdFromUrl(state)
            , series: SeriesSelectors.getSeries(state)
            , isFetching: SeriesSelectors.isFetching(state)
            , error: SeriesSelectors.getError(state)
            }
        );
    }

    function mapActionsToProps(dispatch) {
        return bindActionCreators(
            { getSeries: SeriesActions.getSeries
            }
        , dispatch);
    }


    class SeriesContainerComponent extends Component {
        componentWillMount() {
            this.props.getSeries(this.props.seriesId);
        }

        render() {
            return (
                <WrappedComponent {...this.props} />
            );
        }
    }


    return connect(mapStateToProps, mapActionsToProps)(SeriesContainerComponent);
}
