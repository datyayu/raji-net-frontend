// @flow
import type { ReleaseType } from './release';


export type SeriesType =
    { id: number
    , name: string
    , image: string
    , albums: ReleaseType[]
    }
;
