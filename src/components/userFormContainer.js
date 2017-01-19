import UserForm from './userForm';
import { connect } from 'react-redux';
import { login } from '../state/actions';

const mapStateToProps = state => {
    return {
        username: state.username
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFormSubmit: username => {
            dispatch(login(username));
        }
    }
};

export const UserFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserForm);