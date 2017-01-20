import TodoList from './todoList';
import { connect } from 'react-redux';
import { login } from '../state/actions';
import { dangerouslyClearTodos, logout } from '../state/actions';

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
};

export const TodoListContainer = connect(
    mapStateToProps,
    null
)(TodoList);