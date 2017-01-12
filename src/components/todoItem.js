import React, {Component} from 'react';
import IconButton from './iconButton.js';

class TodoItem extends Component {
    render() {
        return (
            <li className="todo-item">
                {this.props.text}
                <br />
                <span>
                    <IconButton name="check" />
                    <IconButton name="pencil" />
                    <IconButton name="cancel" />
                </span>
            </li>
        );
    }
}

export default TodoItem;