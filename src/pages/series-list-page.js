import React from 'react';

import { Search as SearchComponent } from '../components';
import { SearchContainer } from '../containers';


const Search = SearchContainer(SearchComponent);


export function SeriesListPage() {
    return (
        <div className="series-list-container">
            <Search />
            {/* Series List component */}
        </div>
    );
}
