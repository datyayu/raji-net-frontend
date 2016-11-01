import React from 'react';

import { ReleasePage } from './pages';
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
        <div className="application">
            <Sidenav />

            <div className={wrapperStyleClasses}>
                <Header />
                <MobileOverlay />

                <div className="application-content">
                    {/* TODO: REPLACE THIS WITH ROUTER */}
                    <ReleasePage />
                </div>
            </div>
        </div>
    );
}


export const App = ApplicationContainer(AppComponent);