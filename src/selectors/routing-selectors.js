// @flow
import { ApplicationState } from '../reducers';


export class RoutingSelectors {
    static getLocation(state: ApplicationState): any {
        return state.routing.location;
    }

    static getAction(state: ApplicationState): any {
        return state.routing.action;
    }
}