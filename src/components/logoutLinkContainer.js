import LogoutLink from './logoutLink';
import { connect } from 'react-redux';
import { login } from '../state/actions';
import { dangerouslyClearTodos, logout } from '../state/actions';
import auth from '../services/auth';

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => {
            auth.logout();
            dispatch(dangerouslyClearTodos());
            dispatch(logout());
        }
    }
};

export const LogoutLinkContainer = connect(
    null,
    mapDispatchToProps
)(LogoutLink);