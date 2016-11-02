// @flow
import sampleAlbum from '../assets/images/sample-album.jpg';

import type { TrackModel, PlaylistModel } from '../models';


export class PlaylistSelectors {
    static getPrevTrack(): TrackModel {
        return (
            { id: 1
            , name: 'puengue'
            , artists: ['Iguchi Yuka']
            , album: 
                { id: 1
                , name: 'Hafa Adai'
                , artists: ['Iguchi Yuka']
                , image: sampleAlbum
                , year: 2015
                , singleType: "OP single"
                , plays: 32
                , length: 2
                }
           }
        );
    }

    static getCurrentTrack(): TrackModel {
        return (
            { id: 2
            , name: 'manana'
            , artists: ['Iguchi Yuka']
            , album: 
                { id: 1
                , name: 'Hafa Adai'
                , artists: ['Iguchi Yuka']
                , image: sampleAlbum
                , year: 2015
                , singleType: "OP single"
                , plays: 32
                , length: 2
                }
           }
        );
    }

    static getNextTrack(): TrackModel {
        return (
            { id: 3
            , name: 'Sketch Switch'
            , artists: 
                [ 'Asumi Kana'
                , 'Mizuhashi Kaori'
                , 'Yuuko Goto'
                , 'Ryoko Shintani'
                ]
            , album: 
                { id: 1
                , name: 'Hafa Adai'
                , artists: ['Iguchi Yuka']
                , image: sampleAlbum
                , year: 2015
                , singleType: "OP single"
                , plays: 32
                , length: 2
                }
            }
        );
    }

    static getCurrentPlaylist(): PlaylistModel[] {
        return (
            [
                { id: 1
                , name: 'puengue'
                , author: '@datyayu'
                , image: sampleAlbum
                , length: 3
                , top: [1, 2, 3]
                , artists: ['Iguchi Yuka']
                , year: 2015
                , album: 
                    { id: 1
                    , name: 'Hafa Adai'
                    , artists: ['Iguchi Yuka']
                    , image: sampleAlbum
                    , year: 2015
                    , singleType: "OP single"
                    , plays: 32
                    , length: 2
                    }
                , plays: 323
                , tracks: []
                }
            ]
        );
    }
}