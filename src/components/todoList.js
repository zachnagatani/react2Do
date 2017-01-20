import React, {Component} from 'react';
import TodoItem from './todoItem';

// class TodoList extends Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return (
//             <div className="todo-list-container">
//                 <h1>Your Tasks</h1>
//                 <ul className="todo-list">
//                     <TodoItem text="Make some bomb tacos" />
//                     <TodoItem text="Make some bomb tacos" />
//                     <TodoItem text="Make some bomb tacos" />
//                 </ul>
//             </div>
//         );
//     }
// };

function TodoList(props) {
    return (
        <div className="todo-list-container">
            <h1>Your Tasks</h1>
            <ul className="todo-list">
                {props.todos.map(todo => <TodoItem key={todo.id} id={todo.id} text={todo.todo} onDeleteClick={props.onDeleteClick} />)}
            </ul>
        </div>
    );
}

export default TodoList;