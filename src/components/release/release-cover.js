// @flow
import React from 'react';

import { Icon } from '../shared';

type ReleaseCoverProps = {
    image: string;
    alt: string;
};


export function ReleaseCover({ image, alt }: ReleaseCoverProps) {
    return (
        <div className="series-album-cover">
            <img className="series-album-cover-image" src={image} alt={alt} />
            
            <div className="series-album-cover-icons">
                <Icon type="plus" className="series-album-cover-icon" />
                <Icon type="heart" className="series-album-cover-icon" />
                <Icon type="share" className="series-album-cover-icon" />
            </div>
        </div>
    );
};
