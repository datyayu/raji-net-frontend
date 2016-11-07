// @flow
import type { SeasonType } from '../../types';

import React from 'react';

import { Preloader, ErrorMessage } from '../shared';
import { SeasonListItem } from './season-list-item';


type SeasonListProps =
    { seasonList: SeasonType[]
    , isFetching: boolean
    , error: ?string
    }
;


export function SeasonList(
    { seasonList=[]
    , isFetching=false
    , error
    }
    : SeasonListProps
) {
    if (isFetching)
        return <Preloader />;

    if (error)
        return <ErrorMessage text={error} />;

    return (
        <div className="season-list">
            { seasonList.map((season, idx) =>
                <SeasonListItem key={idx} season={season} />
            )}
        </div>
    );
}
