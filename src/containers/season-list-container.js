import React, { Component } from 'react';

import { SeasonListSelectors } from '../selectors';


export function SeasonListContainer(WrappedComponent) {
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
}