// @flow
import type { LocationModel } from '../models';
import type { Action } from 'redux';


export class RoutingActions {
    static NAVIGATE = '[Routing] NAVIGATE';
    static navigateTo(location: LocationModel, action: string): Action {
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