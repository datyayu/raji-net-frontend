// @flow
import sampleAlbum from '../assets/images/sample-album.jpg';

import type { AlbumModel } from '../models';


export class ReleaseSelectors {
    static getRelease(): AlbumModel {
        return (
            { id: 1
            , name: 'hello world'
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