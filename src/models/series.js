// @flow
import type { AlbumModel } from './album';


export type SeriesModel = {
    id: number;
    name: string;
    image: string;
    albums: AlbumModel[];
};