import React, {Component} from 'react';

const SubmitButton = props => {
    return (
        <button type="submit" className="submit-button">
            {props.text}
        </button>
    );
}

export default SubmitButton;