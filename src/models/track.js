// @flow
import type { AlbumModel } from './album';

export type TrackModel = {
    id: number;
    name: string;
    artists: string[];
    album: AlbumModel;
}