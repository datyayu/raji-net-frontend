// @flow
import React from 'react';

import { SeasonListItem } from './season-list-item';
import type { SeasonModel } from '../../models';
import { Preloader, ErrorMessage } from '../shared';


type SeasonListProps = {
    seasonList: SeasonModel[];
    isFetching: boolean;
    error: ?string;
}


export function SeasonList({ seasonList=[], isFetching=false, error }: SeasonListProps) {
    if (isFetching)
        return ( <Preloader /> );

    if (error)
        return <ErrorMessage text={error} />;

    return (
        <div className="season-list">
            { seasonList.map((season, idx) =>
                <SeasonListItem key={idx} season={season} />
            )}
        </div>
    );
};
