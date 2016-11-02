// @flow
import React from 'react';
import { Link } from 'react-router'

import type { SeriesModel } from '../../models';


type SeriesListItemProps = {
    series: SeriesModel;
}


export function SeriesListItem({ series }: SeriesListItemProps) {
    return (
        <Link className="series-list-item" to={`/series/${series.id}`}>
            <img className="series-list-image" src={series.image} alt={series.name} />
 
            <div className="series-list-info">
                <h5 className="series-list-info-title">{series.name}</h5>
            </div>
        </Link>
    );
}
