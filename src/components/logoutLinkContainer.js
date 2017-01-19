import LogoutLink from './logoutLink';
import { connect } from 'react-redux';
import { login } from '../state/actions';
import { dangerouslyClearTodos} from '../state/actions';

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => {
            dispatch(dangerouslyClearTodos());
        }
    }
};

export const LogoutLinkContainer = connect(
    null,
    mapDispatchToProps
)(LogoutLink);