// @flow
import React from 'react';
import { Match, Redirect } from 'react-router';

import * as Pages from './pages';


export function AppContent() {
    return (
        <div className="application-content">
            <Match exactly pattern="/" component={() => <Redirect to="/player" /> } />
            <Match exactly pattern="/player" component={Pages.PlayerPage} />
            <Match exactly pattern="/series" component={Pages.SeriesListPage} />
            <Match exactly pattern="/playlists" component={Pages.PlaylistListPage} />
            <Match exactly pattern="/seasons" component={Pages.SeasonListPage} />
            <Match pattern="/series/:series_id" component={Pages.SeriesIndividualPage} />
            <Match pattern="/releases/:release_id" component={Pages.ReleasePage} />
        </div>
    );
}