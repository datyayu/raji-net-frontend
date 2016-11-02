// @flow
import sampleAlbum from '../assets/images/sample-album.jpg';

import type { PlaylistModel } from '../models';


const mockPlaylist: PlaylistModel =
    { id: 1
    , name: 'Gochiusa soundtrack'
    , image: sampleAlbum
    , author: '@datyayu'
    , length: 24
    , plays: 2456
    , top: [1,2,3]
    , year: 2015
    , tracks:
        [
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
        ,   { id: 2
            , name: 'Rainbow Girl'
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
        ,   { id: 3
            , name: 'Sketch Switch'
            , artists: ['Asumi Kana', 'Mizuhashi Kaori', 'Yuuko Goto', 'Ryoko Shintani']
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
    }
;


export class PlaylistListSelectors {
    static getPlaylistList(): PlaylistModel[] {
        return [
            mockPlaylist,
            mockPlaylist,
            mockPlaylist,
            mockPlaylist,
            mockPlaylist,
            mockPlaylist,
            mockPlaylist,
            mockPlaylist,
        ];
    }
}