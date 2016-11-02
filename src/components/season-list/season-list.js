// @flow
import React from 'react';

import { SeasonListItem } from './season-list-item';
import type { SeasonModel } from '../../models';


type SeasonListProps = {
    seasonList: SeasonModel[];
}


export function SeasonList({ seasonList=[] }: SeasonListProps) {
    return (
        <div className="season-list">
            { seasonList.map((season, idx) =>
                <SeasonListItem key={idx} season={season} />
            )}
        </div>
    );
};
