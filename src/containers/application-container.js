// @flow
import React, { Component } from 'react';

import { ApplicactionSelectors } from '../selectors';


type ApplicationContainerProps = {
    hasPlaylist: boolean;
    title: string;
}


export function ApplicationContainer(WrappedComponent: ReactClass<any>): ReactClass<ApplicationContainerProps> {
    class ApplicationWrappedComponent extends Component {
        render() {
            const pageHasPlaylist: boolean = ApplicactionSelectors.pageHasPlaylist();
            const pageTitle: string = ApplicactionSelectors.getPageTitle();
            
            return (
                <WrappedComponent {...this.props}
                    hasPlaylist={pageHasPlaylist} 
                    title={pageTitle}
                />
            );
        }
    }

    return ApplicationWrappedComponent;
};
