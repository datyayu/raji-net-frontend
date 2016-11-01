import React from 'react';

import { SeasonListItem } from './season-list-item';


export function SeasonList({ seasonList=[] }) {
    return (
        <div className="season-list">
            { seasonList.map((season, idx) =>
                <SeasonListItem key={idx} season={season} />
            )}
        </div>
    );
}