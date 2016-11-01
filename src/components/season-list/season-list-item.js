import React from 'react';
import { Link } from 'react-router';


export function SeasonListItem({ season }) {
    return (
        <Link className="season-list-item" to="/series">
            <img className="season-list-item-image" src={season.image} alt={season.name} />
        </Link>
    );
}