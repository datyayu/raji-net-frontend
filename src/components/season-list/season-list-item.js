import React from 'react';


export function SeasonListItem({ season }) {
    return (
        <a className="season-list-item" href="#">
            <img className="season-list-item-image" src={season.image} alt={season.name} />
        </a>
    );
}