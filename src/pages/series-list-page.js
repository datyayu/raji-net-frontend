// @flow
import React from 'react';

import { SearchContainer, SeriesListContainer } from '../containers';
import { Search as SearchComponent, SeriesList as SeriesListComponent } from '../components';


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
