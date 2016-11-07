// @flow
import type { TrackType } from './track'


export type ReleaseType =
    { id: number
    , name: string
    , image: string
    , artists: string[]
    , year: number
    , length: number
    , plays: number
    , singleType: string
    , tracks: TrackType[]
    }
;
