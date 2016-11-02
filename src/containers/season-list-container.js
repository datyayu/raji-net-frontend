// @flow
import React, { Component } from 'react';

import { SeasonListSelectors } from '../selectors';


export function SeasonListContainer(WrappedComponent: ReactClass<any>) {
    class SeasonListWrappedComponent extends Component {
        render() {
            const seasonList = SeasonListSelectors.getSeasons();

            return (
                <WrappedComponent {...this.props}
                    seasonList={seasonList}
                />
            );
        }
    }

    return SeasonListWrappedComponent;
};
