import React from 'react';

import { Search as SearchComponent, PlaylistList as PlaylistListComponent } from '../components';
import { SearchContainer, PlaylistListContainer } from '../containers';



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