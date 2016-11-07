// @flow
import type { SeasonType } from '../../types';

import React from 'react';
import { Link } from 'react-router';


type SeasonListProps =
    { season: SeasonType
    }
;


export function SeasonListItem(
    { season
    }
    : SeasonListProps
) {
    return (
        <Link className="season-list-item" to="/series">
            <img className="season-list-item-image" src={season.image} alt={season.name} />
        </Link>
    );
}
