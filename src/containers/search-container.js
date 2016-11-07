// @flow
import type { ApplicationState } from '../reducers';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { SearchActions } from '../actions';
import { SearchSelectors } from '../selectors';


export function SearchContainer(WrappedComponent: ReactClass<any>): ReactClass<any> {
    function mapStateToProps(state: ApplicationState) {
        return (
            { searchValue: SearchSelectors.getSearchValue(state)
            }
        );
    }

    function mapActionsToProps(dispatch) {
        return bindActionCreators(
            { onSearchChange: SearchActions.setSearchValue
            }
        , dispatch);
    }


    return connect(mapStateToProps, mapActionsToProps)(WrappedComponent);
}
