import UserForm from './userForm';
import { connect } from 'react-redux';
import { login, addTodo } from '../state/actions';

const mapStateToProps = state => {
    return {
        username: state.username
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFormSubmit: username => {
            dispatch(login(username));
        },
        pushTodosToState: todos => {
            todos.forEach(todo => dispatch(addTodo(todo.todo, todo.isDone, todo._id)));
        }
    }
};

export const UserFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserForm);