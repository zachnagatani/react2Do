import React, {Component} from 'react';
import IconButton from './iconButton.js';

function TodoItem(props) {
    return (
        <li className="todo-item">
            <span>{props.text}</span>
            <span>
                <IconButton name="check icon" />
                <IconButton name="edit icon" />
                <IconButton name="remove icon"
                    onDeleteClick={ () => props.onDeleteClick(props.id)}
                    onEditClick={ () => console.log('edit')}
                    onCheckClick={ () => console.log('check')} />
            </span>
        </li>
    );   
}

export default TodoItem;