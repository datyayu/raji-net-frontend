// @flow
import type { LocationType } from '../types';
import type { Action } from 'redux';


export class RoutingActions {
    static NAVIGATE = '[Routing] NAVIGATE';
    static navigateTo(location: LocationType, action: string): Action {
        return (
            { type: RoutingActions.NAVIGATE
            , payload:
                { location: location
                , action: action
                }
            }
        );
    }
}
