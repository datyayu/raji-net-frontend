import React from 'react';

import { Search as SearchComponent, SeriesList as SeriesListComponent } from '../components';
import { SearchContainer, SeriesListContainer } from '../containers';



const Search = SearchContainer(SearchComponent);
const SeriesList = SeriesListContainer(SeriesListComponent);

export function SeriesListPage() {
    return (
        <div className="series-list-container">
            <Search />
            <SeriesList />
        </div>
    );
}
