import React, {Component} from 'react';
import SubmitButton from './submitButton';
import SmallLink from './smallLink';

class UserForm extends Component {
    render() {
        return(
            <div className="user-form">
                <form>
                    <label>
                        Username
                        <input type="text" />
                    </label>
                    
                    <label>
                        Password
                        <input type="password" />
                    </label>

                    <SubmitButton text={this.props.buttonText} />
                </form>

                <p><small>{this.props.questionText}</small></p>
                <SmallLink text={this.props.linkText} />
            </div>
        );
    }
}

export default UserForm;