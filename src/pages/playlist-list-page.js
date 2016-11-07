// @flow
import React from 'react';

import { SearchContainer, PlaylistListContainer } from '../containers';
import { Search as SearchComponent, PlaylistList as PlaylistListComponent } from '../components';


const Search = SearchContainer(SearchComponent);
const PlaylistList = PlaylistListContainer(PlaylistListComponent);


export function PlaylistListPage() {
    return (
        <div className="playlist-list-container">
            <Search />
            <PlaylistList />
        </div>
    );
}
