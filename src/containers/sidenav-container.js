import React, { Component } from 'react';

import { SidenavSelectors } from '../selectors';


export function SidenavContainer(WrappedComponent) {
    class SidenavWrappedComponent extends Component {
        render() {
            const links = SidenavSelectors.getLinks();
            const isActive = SidenavSelectors.isActive();
            
            return (
                <WrappedComponent {...this.props}
                    isActive={isActive} 
                    links={links} 
                />
            );
        }
    }

    return SidenavWrappedComponent;
}