// @flow
import sampleAlbum from '../assets/images/sample-album.jpg';

import type { TrackModel, PlaylistModel } from '../models';
import type { ApplicationState } from '../reducers';


export class PlaylistSelectors {

    static showMobilePlaylist(state: ApplicationState): boolean {
        return state.playlist.showPlaylist;
    }



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
                , tracks: []
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
                , tracks: []
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
                , tracks: []
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
                , plays: 323
                , tracks: []
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
            ]
        );
    }
}