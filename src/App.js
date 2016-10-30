import React, { Component } from 'react';

import { Sidenav, Header, MobileOverlay } from './components';

const links = [
    { text: 'now playing', href: '/dist/html/player.html' },
    { text: 'series', href: '/dist/html/series-list.html' },
    { text: 'playlists', href: '/dist/html/playlist-list.html' },
    { text: 'seasons', href: '/dist/html/season-list.html' },
];



export class App extends Component {
    constructor(props) {
        super(props);

        this.state = { showSidenav: false, hasPlaylist: false };
        this.toggleSidenav = this.toggleSidenav.bind(this);
    }


    toggleSidenav() {
        this.setState({ 
            showSidenav: !this.state.showSidenav,
        })
    }


    render() {
        const { showSidenav, hasPlaylist } = this.state;

        const wrapperStyleClasses = hasPlaylist 
            ? 'application-wrapper has-playlist'
            : 'application-wrapper';

        return (
            <div className="application">
                <Sidenav links={links} isActive={showSidenav} />

                <div className={wrapperStyleClasses}>
                    <Header onNavIconClick={this.toggleSidenav} />
                    <MobileOverlay isActive={showSidenav} onClick={this.toggleSidenav} />
                </div>
            </div>
        );
    }
}