// @flow
import React, { Component } from 'react';

import { PlaylistListSelectors } from '../selectors';


export function PlaylistListContainer(WrappedComponent: ReactClass<any>) {
    class PlaylistListWrappedComponent extends Component {
        render() {
            const playlistList = PlaylistListSelectors.getPlaylistList();

            return (
                <WrappedComponent {...this.props}
                    playlistList={playlistList}
                />
            );
        }
    }

    return PlaylistListWrappedComponent;
};
