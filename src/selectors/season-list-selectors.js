// @flow
import sampleSeasonImage from '../assets/images/sample-season.jpg';

import type { SeasonModel } from '../models';


export class SeasonListSelectors {
    static getSeasons(): SeasonModel[] {
        return [
            { id: 1, name: 'fall 2016', image: sampleSeasonImage },
            { id: 2, name: 'fall 2016', image: sampleSeasonImage },
            { id: 3, name: 'fall 2016', image: sampleSeasonImage },
            { id: 4, name: 'fall 2016', image: sampleSeasonImage },
            { id: 5, name: 'fall 2016', image: sampleSeasonImage },
            { id: 6, name: 'fall 2016', image: sampleSeasonImage },
        ];
    }
}