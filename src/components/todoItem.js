import React, {Component} from 'react';
import IconButton from './iconButton.js';

class TodoItem extends Component {
    render() {
        return (
            <li className="todo-item">
                <span>{this.props.text}</span>
                <span>
                    <IconButton name="check icon" />
                    <IconButton name="edit icon" />
                    <IconButton name="remove icon" />
                </span>
            </li>
        );
    }
}

export default TodoItem;