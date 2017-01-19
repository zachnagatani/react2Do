import UserForm from './userForm';
import { connect } from 'react-redux';
import { login } from '../state/actions';

const mapDispatchToProps = dispatch => {
    return {
        onFormSubmit: username => {
            dispatch(login(username));
        }
    }
};

const mapStateToProps = state => {
    return {
        username: state.username
    }
}

export const UserFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserForm);