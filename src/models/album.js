// @flow
export type AlbumModel = {
    id: number;
    name: string;
    image: string;
    artists: string[];
    year: number;
    length: number;
    plays: number;
    singleType: string;
}