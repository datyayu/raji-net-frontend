import React from 'react';


export function SeriesReleaseItem({ release }) {
    return (
        <li className="series-release-item">
            <a className="series-release-item-link" href="#">
                <img className="series-release-cover" src={release.image} alt={release.name} />
                <h4 className="series-release-type"> {release.singleType} </h4>
            </a>
        </li>
    );
}