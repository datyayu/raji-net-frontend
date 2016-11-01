// @flow
import React from 'react';
import { BrowserRouter as Router, Match, Miss } from 'react-router';

import * as Pages from './pages';
import { ApplicationContainer, SidenavContainer } from './containers';
import { Sidenav as SidenavComp, Header as HeaderComp, MobileOverlay as MobileOverlayComp} from './components';


const Sidenav = SidenavContainer(SidenavComp);
const MobileOverlay = SidenavContainer(MobileOverlayComp);
const Header = ApplicationContainer(HeaderComp);


function AppComponent({ hasPlaylist=false }: { hasPlaylist: boolean }) {
    const wrapperStyleClasses: string = hasPlaylist
        ? 'application-wrapper has-playlist'
        : 'application-wrapper';

    return (
        <Router>
            <div className="application">
                <Sidenav />

                <div className={wrapperStyleClasses}>
                    <Header />
                    <MobileOverlay />

                    <div className="application-content">
                        <Match exactly pattern="/" component={Pages.PlayerPage} />
                        <Match exactly pattern="/player" component={Pages.PlayerPage} />
                        <Match exactly pattern="/series" component={Pages.SeriesListPage} />
                        <Match exactly pattern="/playlists" component={Pages.PlaylistListPage} />
                        <Match exactly pattern="/seasons" component={Pages.SeasonListPage} />
                        <Match pattern="/series/:series_id" component={Pages.SeriesIndividualPage} />
                        <Match pattern="/releases/:release_id" component={Pages.ReleasePage} />
                    </div>
                </div>
            </div>
        </Router>
    );
}


export const App = ApplicationContainer(AppComponent);