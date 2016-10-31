import seriesDefaultImage from '../assets/images/sample-series.jpg';
import albumDefaultImage from '../assets/images/sample-album.jpg';

const mockRelease =
    { name: 'hello world'
    , image: albumDefaultImage
    , artists: ['Iguchi Yuka']
    , singleType: 'OP Single'
    }
;


export class SeriesIndividualSelectors {
    static getSeries() {
        return ( 
            { name: 'Dungeon de deai ni motomeru machigaiteru darou ka?'
            , image: seriesDefaultImage
            , releases:  
                [ mockRelease
                , mockRelease
                , mockRelease
                ]
            }
        );
    }

    static getSeriesReleases() {
        return [
            mockRelease,
            mockRelease,
            mockRelease,
            mockRelease,
        ];
    }
}