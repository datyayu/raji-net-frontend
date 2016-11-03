// @flow
import type { ApplicationState } from '../reducers';


export class RoutingSelectors {
    static getLocation(state: ApplicationState): any {
        return state.routing.location;
    }

    static getAction(state: ApplicationState): string {
        return state.routing.action;
    }

    static getIdFromUrl(state: ApplicationState): string {
        return state.routing.location.pathname
            .split('/')    // Split url by '/'
            .pop()         // Get the last part (the id)
            .split('?')[0] // Get value before query params
    }
}