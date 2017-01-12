import React, {Component} from 'react';
import TodoItem from './todoItem';

class TodoList extends Component {
    render() {
        return (
            <div className="todo-list-container">
                <h1>Your Tasks</h1>
                <ul className="todo-list">
                    <TodoItem text="Make some bomb tacos" />
                    <TodoItem text="Make some bomb tacos" />
                    <TodoItem text="Make some bomb tacos" />
                </ul>
            </div>
        );
    }
};

export default TodoList;