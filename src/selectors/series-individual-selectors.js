// @flow
import seriesDefaultImage from '../assets/images/sample-series.jpg';
import albumDefaultImage from '../assets/images/sample-album.jpg';

import type { AlbumModel, SeriesModel } from '../models';


const mockRelease: AlbumModel =
    { id: 1
    , name: 'hello world'
    , image: albumDefaultImage
    , artists: ['Iguchi Yuka']
    , singleType: 'OP Single'
    , length: 2
    , plays: 33233
    , year: 2015
    }
;


export class SeriesIndividualSelectors {
    static getSeries(): SeriesModel {
        return ( 
            { id: 3
            , name: 'Dungeon de deai ni motomeru machigaiteru darou ka?'
            , image: seriesDefaultImage
            , releases:  
                [ mockRelease
                , mockRelease
                , mockRelease
                ]
            }
        );
    }

    static getSeriesReleases(): AlbumModel[] {
        return [
            mockRelease,
            mockRelease,
            mockRelease,
            mockRelease,
        ];
    }
}