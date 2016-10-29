import React from 'react';

import { Sidenav } from './components';


const links = [
    { text: 'now playing', href: '/dist/html/player.html' },
    { text: 'series', href: '/dist/html/series-list.html' },
    { text: 'playlists', href: '/dist/html/playlist-list.html' },
    { text: 'seasons', href: '/dist/html/season-list.html' },
];


export const App = () => (
    <div>
        <Sidenav links={links} />
    </div>
);