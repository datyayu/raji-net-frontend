import React from 'react';
import { BrowserRouter as Router, Match, Miss } from 'react-router';

import * as Pages from './pages';
import { ApplicationContainer, SidenavContainer } from './containers';
import { 
    Sidenav as SidenavComponent, 
    Header as HeaderComponent, 
    MobileOverlay as MobileOverlayComponent 
} from './components';


const Sidenav = SidenavContainer(SidenavComponent);
const MobileOverlay = SidenavContainer(MobileOverlayComponent);
const Header = ApplicationContainer(HeaderComponent);


function AppComponent({
    hasPlaylist = false,
}) {
    const wrapperStyleClasses = hasPlaylist
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
                        {/* TODO: REPLACE THIS WITH ROUTER */}

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