import sampleAlbum from '../assets/images/sample-album.jpg';


export class PlayerSelectors {
    static getPrevTrack() {
        return {
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
            name: 'Sketch Switch',
            artists: ['Asumi Kana', 'Mizuhashi Kaori', 'Yuuko Goto', 'Ryoko Shintani'],
        };
    }
}