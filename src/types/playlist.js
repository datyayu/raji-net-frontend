// @flow
import type { TrackType } from './track';


export type PlaylistType =
    { id: number
    , name: string
    , image: string
    , author: string
    , length: number
    , plays: number
    , top: number[]
    , year: number
    , tracks: TrackType[]
    }
;
