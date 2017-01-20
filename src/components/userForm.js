import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import SubmitButton from './submitButton';
import SmallLink from './smallLink';
import LogoContainer from './logo';
import auth from '../services/auth';
import {store} from '../App';
import { addTodo } from '../state/actions';

class UserForm extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            usernameInput: '',
            passwordInput: ''
        };

        this.handleUsernameInput = this.handleUsernameInput.bind(this);
        this.handlePasswordInput = this.handlePasswordInput.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleUsernameInput(event) {
        this.setState({
            usernameInput: event.target.value
        });
    }

    handlePasswordInput(event) {
        this.setState({
            passwordInput: event.target.value
        });
    }

    handleClick() {
        var self = this;
        let posturl,
            geturl = 'https://tranquil-headland-44852.herokuapp.com/api/todos';
            
        switch (this.props.route.buttonText) {
            case 'Sign Up':
                 posturl = 'https://tranquil-headland-44852.herokuapp.com/api/users/signup';
                //  url = 'http://localhost:8000/api/users/signup';
                break;
            case 'Log In':
                posturl = 'https://tranquil-headland-44852.herokuapp.com/api/users/login';
                // url = 'http://localhost:8000/api/users/login';
                break;
        }

        const opts = {
            username: this.state.usernameInput,
            password: this.state.passwordInput
        };

        fetch(posturl, {
            headers: {
                'Content-Type': 'application/json' // won't work without this!
            },
            method: 'POST',
            body: JSON.stringify(opts)
        }).catch(function(error) {
            alert(error);
        }).then(function(response) {
            if (response.status === 200) {
                self.props.onFormSubmit(opts.username);
                return response.text();
            }
        }).then(function(data){
            auth.saveToken(JSON.parse(data).token);
        }).then(function() {
            fetch(geturl, {
                headers: {
                    Authorization: 'Bearer ' + auth.getToken()
                },
                method: 'GET'
            }).catch(function(error) {
                alert(error);
            }).then(function(response) {
                return response.text();
            }).then(function(todos){
                self.props.pushTodosToState(JSON.parse(todos));
            }).then(function(){
                browserHistory.push('/todolist');
            });
        });
    }

    render() {
        return(
            <div className="user-form">
                <form className="user-form__form" method="POST">
                    <label htmlFor="username">
                        Username
                    </label>
                    <input type="text" id="username" name="username" value={this.state.usernameInput} onChange={this.handleUsernameInput} />
                    
                    <label htmlFor="password">
                        Password
                    </label>
                    <input type="password" id="password" name="password" value={this.state.passwordInput} onChange={this.handlePasswordInput} />

                    <SubmitButton text={this.props.route.buttonText} handleClick={this.handleClick} />
                </form>

                <p><small>{this.props.route.questionText}</small></p>
                <SmallLink text={this.props.route.linkText} linkTo={this.props.route.linkTo} />
            </div>
        );
    }
}

export default UserForm;