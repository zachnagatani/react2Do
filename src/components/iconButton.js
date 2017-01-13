import React, {Component} from 'react';

const IconButton = props => {
    return (
        <span className="icon-button">
            <i className={props.name}>
            </i>
        </span>
    );
};

export default IconButton;