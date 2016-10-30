import sampleAlbum from '../assets/images/sample-album.jpg';


export class PlaylistSelectors {
    static getPrevTrack() {
        return {
            id: 1,
            name: 'puengue',
            artists: ['Iguchi Yuka'],
            album: {
                id: 1,
                name: 'Hafa Adai',
                artists: ['Iguchi Yuka'],
                image: sampleAlbum,
            }
        };
    }

    static getCurrentTrack() {
        return {
            id: 2,
            name: 'Rainbow Girl',
            artists: ['Iguchi Yuka'],
            album: {
                id: 1,
                name: 'Hafa Adai',
                artists: ['Iguchi Yuka'],
                image: sampleAlbum,
            }
        };
    }

    static getNextTrack() {
        return {
            id: 3,
            name: 'Sketch Switch',
            artists: ['Asumi Kana', 'Mizuhashi Kaori', 'Yuuko Goto', 'Ryoko Shintani'],
        };
    }

    static getCurrentPlaylist() {
        return [
            {
                id: 1,
                name: 'puengue',
                artists: ['Iguchi Yuka'],
                album: {
                    id: 1,
                    name: 'Hafa Adai',
                    artists: ['Iguchi Yuka'],
                    image: sampleAlbum,
                },
            },
            {
                id: 2,
                name: 'Rainbow Girl',
                artists: ['Iguchi Yuka'],
                album: {
                    id: 1,
                    name: 'Hafa Adai',
                    artists: ['Iguchi Yuka'],
                    image: sampleAlbum,
                },
            },
            {
                id: 3,
                name: 'Sketch Switch',
                artists: ['Asumi Kana', 'Mizuhashi Kaori', 'Yuuko Goto', 'Ryoko Shintani'],
                album: {
                    id: 1,
                    name: 'Hafa Adai',
                    artists: ['Iguchi Yuka'],
                    image: sampleAlbum,
                },
            },
        ];
    }
}