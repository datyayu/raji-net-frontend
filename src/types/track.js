// @flow
import type { ReleaseType } from './release';


export type TrackType =
    { id: number
    , name: string
    , artists: string[]
    , album: ReleaseType
    , url: string
    }
;
