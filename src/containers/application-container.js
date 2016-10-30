import React, { Component } from 'react';

import { ApplicactionSelectors } from '../selectors';


export function ApplicationContainer(WrappedComponent) {
    class ApplicationWrappedComponent extends Component {
        render() {
            const pageHasPlaylist = ApplicactionSelectors.pageHasPlaylist();
            const pageTitle = ApplicactionSelectors.getPageTitle();
            
            return (
                <WrappedComponent {...this.props}
                    hasPlaylist={pageHasPlaylist} 
                    title={pageTitle}
                />
            );
        }
    }

    return ApplicationWrappedComponent;
}