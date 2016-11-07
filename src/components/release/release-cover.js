// @flow
import React from 'react';

import { Icon } from '../shared';


type ReleaseCoverProps =
    { image: string
    , alt: string
    }
;


export function ReleaseCover(
    { image=''
    , alt=''
    }
    : ReleaseCoverProps
) {
    return (
        <div className="release-cover">
            <img className="release-cover-image" src={image} alt={alt} />

            <div className="release-cover-icons">
                <Icon type="plus" className="release-cover-icon" />
                <Icon type="heart" className="release-cover-icon" />
                <Icon type="share" className="release-cover-icon" />
            </div>
        </div>
    );
}
