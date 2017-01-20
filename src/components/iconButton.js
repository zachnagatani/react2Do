import React, {Component} from 'react';
import apiCalls from '../services/apiCalls';
import auth from '../services/auth';
import { store } from '../App';

// const IconButton = props => {
//     return (
//         <span className="icon-button">
//             <i onClick={props.name === 'remove icon' ? props.onDeleteClick : console.log('poopee')}>
//                 {props.name}
//             </i>
//         </span>
//     );
// };

class IconButton extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if (this.props.name === 'remove icon') {
            apiCalls.deleteTodo(store, 'https://tranquil-headland-44852.herokuapp.com/api/todos/delete/', this.props.todoid, auth.getToken());
            this.props.onDeleteClick();
        } else if (this.props.name === 'edit icon') {
            this.props.onEditClick();
        } else if (this.props.name === 'check icon') {
            this.props.onCheckClick();
        }
    }

    render() {
        return (
            <span className="icon-button">
                <i onClick={this.handleClick}>
                    {this.props.name}
                </i>
            </span>
        );
    }
};

export default IconButton;