import TodoList from './todoList';
import { connect } from 'react-redux';
import { deleteTodo } from '../state/actions';

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onDeleteClick: id => dispatch(deleteTodo(id))
    }
}

export const TodoListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);