// @flow
import type { TrackModel } from './track';


export type AlbumModel = {
    id: number;
    name: string;
    image: string;
    artists: string[];
    year: number;
    length: number;
    plays: number;
    singleType: string;
    tracks: TrackModel[];
}