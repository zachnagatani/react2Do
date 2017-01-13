import React, {Component} from 'react';
import SubmitButton from './submitButton';
import SmallLink from './smallLink';
import LogoContainer from './logo';

class UserForm extends Component {
    render() {
        return(
            <div className="user-form">
                <form className="user-form__form" method="POST">
                    <label htmlFor="username">
                        Username
                    </label>
                    <input type="text" id="username" name="username" />
                    
                    <label htmlFor="password">
                        Password
                    </label>
                    <input type="password" id="password" name="password" />

                    <SubmitButton text={this.props.route.buttonText} />
                </form>

                <p><small>{this.props.route.questionText}</small></p>
                <SmallLink text={this.props.route.linkText} linkTo={this.props.route.linkTo} />
            </div>
        );
    }
}

export default UserForm;