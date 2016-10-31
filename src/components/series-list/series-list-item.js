import React from 'react';


export function SeriesListItem({ series }) {
    return (
        <a className="series-list-item" href="#">
            <img className="series-list-image" src={series.image} alt={series.name} />
 
            <div className="series-list-info">
                <h5 className="series-list-info-title">{series.name}</h5>
            </div>
        </a>
    );
}
