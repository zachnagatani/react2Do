import React, {Component} from 'react';
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
        const URL = 'https://tranquil-headland-44852.herokuapp.com/api/users/signup'; 
        fetch(URL, {
            method: 'POST',
            body: this.state
        }).then(function(response) {
            // auth.saveToken(response.text);
            // console.log(response.text());
            return response.text();
        }).then(function(token) {
            auth.saveToken(token);
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