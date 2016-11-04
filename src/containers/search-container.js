// @flow
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { SearchSelectors } from '../selectors';
import { SearchActions } from '../actions';

import type { ApplicationState } from '../reducers';


export function SearchContainer(WrappedComponent: ReactClass<any>) {
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
};
