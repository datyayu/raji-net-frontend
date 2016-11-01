import React from 'react';
import { Link } from 'react-router'


export function SeriesListItem({ series }) {
    return (
        <Link className="series-list-item" to={`/series/${series.id}`}>
            <img className="series-list-image" src={series.image} alt={series.name} />
 
            <div className="series-list-info">
                <h5 className="series-list-info-title">{series.name}</h5>
            </div>
        </Link>
    );
}
