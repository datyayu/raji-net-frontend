// @flow
import type { ReleaseType } from './release';


export type TrackType =
    { id: number
    , name: string
    , artists: string[]
    , release: ReleaseType
    , url: string
    }
;
