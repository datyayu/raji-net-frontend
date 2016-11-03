// @flow
import type { ApplicationState } from '../reducers';

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { SeriesIndividualSelectors, RoutingSelectors } from '../selectors';
import { SeriesActions } from '../actions';



export function SeriesIndividualContainer(WrappedComponent: ReactClass<any>) {
    function mapStateToProps(state: ApplicationState) {
        return (
            { series: SeriesIndividualSelectors.getSeries(state)
            , seriesId: RoutingSelectors.getIdFromUrl(state)
            , isFeching: SeriesIndividualSelectors.isFetching(state)
            }
        );
    }

    function mapActionsToProps(dispatch) {
        return bindActionCreators(
            { getSeries: SeriesActions.getSeries
            }
        , dispatch);
    }

    class SeriesIndividualContainerComponent extends Component {
        componentWillMount() {
            this.props.getSeries(this.props.seriesId);
        }

        render() {
            return (
                <WrappedComponent {...this.props} />
            );
        }
    }

    return connect(mapStateToProps, mapActionsToProps)(SeriesIndividualContainerComponent);
};