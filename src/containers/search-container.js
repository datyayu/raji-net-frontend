// @flow
import React, { Component } from 'react';

import { SearchSelectors } from '../selectors';


export function SearchContainer(WrappedComponent: ReactClass<any>) {
    class SearchWrappedComponent extends Component {
        render() {
            const searchValue = SearchSelectors.getSearchValue();
            
            return (
                <WrappedComponent {...this.props}
                    value={searchValue}
                />
            );
        }
    }

    return SearchWrappedComponent;
};
