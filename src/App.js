// @flow
import React from 'react';
import { ControlledBrowserRouter} from 'react-router-addons-controlled';
import { createBrowserHistory } from 'history';

import { Sidenav as SidenavComp, Header as HeaderComp, MobileOverlay as MobileOverlayComp} from './components';
import { ApplicationContainer, SidenavContainer, RoutingContainer, SearchContainer, PlaylistContainer } from './containers';
import { AppContent } from './app-content';


const history = createBrowserHistory();

const Sidenav = SidenavContainer(SidenavComp);
const MobileOverlay = PlaylistContainer(SidenavContainer(MobileOverlayComp));
const Header = PlaylistContainer(SearchContainer(SidenavContainer(ApplicationContainer(HeaderComp))));
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
                    <AppContent />
                </div>
            </div>
        </Router>
    );
}


export const App = ApplicationContainer(AppComponent);