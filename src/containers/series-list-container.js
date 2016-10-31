import React, { Component } from 'react';

import { SeriesListSelectors } from '../selectors';


export function SeriesListContainer(WrappedComponent) {
    class SeriesListWrappedComponent extends Component {
        render() {
            const seriesList = SeriesListSelectors.getSeriesList();
            
            return (
                <WrappedComponent {...this.props}
                    seriesList={seriesList}
                />
            );
        }
    }

    return SeriesListWrappedComponent;
}