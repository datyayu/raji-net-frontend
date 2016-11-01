import React, { Component } from 'react';

import { ReleaseSelectors } from '../selectors';


export function ReleaseContainer(WrappedComponent) {
    class ReleaseWrappedComponent extends Component {
        render() {
            const release = ReleaseSelectors.getRelease();

            return (
                <WrappedComponent {...this.props}
                    release={release}
                />
            );
        }
    }

    return ReleaseWrappedComponent;
}