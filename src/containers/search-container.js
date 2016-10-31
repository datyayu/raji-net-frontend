import React, { Component } from 'react';

import { SearchSelectors } from '../selectors';


export function SearchContainer(WrappedComponent) {
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
}