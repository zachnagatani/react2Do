import React, {Component} from 'react';

const SubmitButton = props => {
    const handleClick = (event) => {
        event.preventDefault();
        props.handleClick();
    }

    return (
        <button type="submit" className="submit-button" onClick={handleClick}>
            {props.text}
        </button>
    );
}

export default SubmitButton;