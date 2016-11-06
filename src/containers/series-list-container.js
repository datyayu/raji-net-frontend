// @flow
import type { ApplicationState } from '../reducers';

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { SeriesListSelectors } from '../selectors';
import { SeriesListActions } from '../actions';



export function SeriesListContainer(WrappedComponent: ReactClass<any>) {
    function mapStateToProps(state: ApplicationState) {
        return (
            { seriesList: SeriesListSelectors.getSeriesList(state)
            , isFetching: SeriesListSelectors.isFetching(state)
            , error: SeriesListSelectors.getError(state)
            }
        );
    }

    function mapActionsToProps(dispatch) {
        return bindActionCreators(
            { getSeriesList: SeriesListActions.getSeriesList
            }
        , dispatch);
    }

    class SeriesListContainerComponent extends Component {
        componentWillMount() {
            this.props.getSeriesList();
        }

        render() {
            return (
                <WrappedComponent {...this.props} />
            );
        }
    }

    return connect(mapStateToProps, mapActionsToProps)(SeriesListContainerComponent);
};