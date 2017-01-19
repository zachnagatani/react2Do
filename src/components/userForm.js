import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import SubmitButton from './submitButton';
import SmallLink from './smallLink';
import LogoContainer from './logo';
import auth from '../services/auth';

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
        let url;
        switch (this.props.route.buttonText) {
            case 'Sign Up':
                 url = 'https://tranquil-headland-44852.herokuapp.com/api/users/signup';
                //  url = 'http://localhost:8000/api/users/signup';
                break;
            case 'Log In':
                url = 'https://tranquil-headland-44852.herokuapp.com/api/users/login';
                // url = 'http://localhost:8000/api/users/login';
                break;
        }

        const opts = {
            username: this.state.usernameInput,
            password: this.state.passwordInput
        };

        fetch(url, {
            headers: {
                'Content-Type': 'application/json' // won't work without this!
            },
            method: 'POST',
            body: JSON.stringify(opts)
        }).catch(function(error) {
            alert(error);
        }).then(function(response) {
            if (response.status === 200) {
                return response.text();
            }
        }).then(function(data){
            auth.saveToken(JSON.parse(data).token);
            browserHistory.push('/todolist');
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