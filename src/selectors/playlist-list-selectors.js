import sampleAlbum from '../assets/images/sample-album.jpg';

const mockPlaylist =
    { id: 1
    , name: 'Gochiusa soundtrack'
    , image: sampleAlbum
    , author: '@datyayu'
    , length: 24
    , plays: 2456
    , top: 
        [
            { id: 1
            , name: 'puengue'
            , artists: ['Iguchi Yuka']
            , album: 
                { id: 1
                , name: 'Hafa Adai'
                , artists: ['Iguchi Yuka']
                , image: sampleAlbum
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
                }
            }
        ]
    }
;


export class PlaylistListSelectors {
    static getPlaylistList() {
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