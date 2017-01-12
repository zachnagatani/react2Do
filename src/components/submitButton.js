import React, {Component} from 'react';

const SubmitButton = props => {
    return (
        <button type="submit">
            {props.text}
        </button>
    );
}

export default SubmitButton;