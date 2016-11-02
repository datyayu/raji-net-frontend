// @flow
import React, { Component } from 'react';

import { SeriesIndividualSelectors } from '../selectors';


export function SeriesIndividualContainer(WrappedComponent: ReactClass<any>) {
    class SeriesIndividualWrappedComponent extends Component {
        render() {
            const series = SeriesIndividualSelectors.getSeries();
            const releases = SeriesIndividualSelectors.getSeriesReleases();


            return (
                <WrappedComponent {...this.props}
                    series={series}
                    releases={releases}
                />
            );
        }
    }

    return SeriesIndividualWrappedComponent;
};
