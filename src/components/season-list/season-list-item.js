// @flow
import React from 'react';
import { Link } from 'react-router';

import type { SeasonModel } from '../../models';


type SeasonListProps = {
    season: SeasonModel;
}


export function SeasonListItem({ season }: SeasonListProps) {
    return (
        <Link className="season-list-item" to="/series">
            <img className="season-list-item-image" src={season.image} alt={season.name} />
        </Link>
    );
}