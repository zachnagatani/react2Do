import React, {Component} from 'react';
import { Link } from 'react-router';

const SmallLink = props => {
    return (
        <Link to={props.linkTo}>{props.text}</Link>
    );
};

export default SmallLink;