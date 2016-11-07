// @flow
import type { ApplicationState } from '../reducers';

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { SeasonsActions } from '../actions';
import { SeasonsSelectors } from '../selectors';


export function SeasonsContainer(WrappedComponent: ReactClass<any>): ReactClass<any> {
    function mapStateToProps(state: ApplicationState) {
        return (
            { seasonList: SeasonsSelectors.getSeasons(state)
            , isFetching: SeasonsSelectors.isFetching(state)
            , error: SeasonsSelectors.getError(state)
            }
        );
    }

    function mapActionsToProps(dispatch) {
        return bindActionCreators(
            { getSeasons: SeasonsActions.getSeasons
            }
        , dispatch);
    }


    class SeasonsContainerComponent extends Component {
        componentWillMount() {
            this.props.getSeasons();
        }

        render() {
            return (
                <WrappedComponent {...this.props} />
            );
        }
    }


    return connect(mapStateToProps, mapActionsToProps)(SeasonsContainerComponent);
}
