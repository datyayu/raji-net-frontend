import sampleAlbum from '../assets/images/sample-album.jpg';


export class ReleaseSelectors {
    static getRelease() {
        return (
            { name: 'hello world'
            , image: sampleAlbum
            , artists: ['Iguchi Yuka']
            , singleType: 'OP Single'
            , length: 12
            , plays: 323
            , year: 2015
            }
        )
    }
}