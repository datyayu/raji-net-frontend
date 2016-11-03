// @flow
import React from 'react';
import { Match } from 'react-router';
import { ControlledBrowserRouter} from 'react-router-addons-controlled';
import { createBrowserHistory } from 'history';

import * as Pages from './pages';
import { Sidenav as SidenavComp, Header as HeaderComp, MobileOverlay as MobileOverlayComp} from './components';
import { ApplicationContainer, SidenavContainer, RoutingContainer } from './containers';

const history = createBrowserHistory();

const Sidenav = SidenavContainer(SidenavComp);
const MobileOverlay = SidenavContainer(MobileOverlayComp);
const Header = SidenavContainer(ApplicationContainer(HeaderComp));
const Router = RoutingContainer(ControlledBrowserRouter);


function AppComponent({ hasPlaylist=false }: { hasPlaylist: boolean }) {
    const wrapperStyleClasses: string = hasPlaylist
        ? 'application-wrapper has-playlist'
        : 'application-wrapper';

    return (
        <Router history={history}>
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