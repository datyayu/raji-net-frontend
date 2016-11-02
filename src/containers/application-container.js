// @flow
import { connect } from 'react-redux';

import { ApplicactionSelectors } from '../selectors';

import type { ApplicationState } from '../reducers';


type ApplicationContainerProps = {
    hasPlaylist: boolean;
    title: string;
}


export function ApplicationContainer(WrappedComponent: ReactClass<any>): ReactClass<ApplicationContainerProps> {
    function mapStateToProps(state: ApplicationState) {
        return (
            { hasPlaylist: ApplicactionSelectors.pageHasPlaylist(state)
            , title: ApplicactionSelectors.getPageTitle(state)
            }
        );
    }


    return connect(mapStateToProps)(WrappedComponent);
};
