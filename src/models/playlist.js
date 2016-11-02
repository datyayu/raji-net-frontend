// @flow
import type { TrackModel } from './track';


export type PlaylistModel = {
    id: number;
    name: string;
    image: string;
    author: string;
    length: number;
    plays: number;
    top: number[];
    year: number;
    tracks: TrackModel[];
}