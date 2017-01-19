import React, { Component } from 'react';
import { Link } from 'react-router';
import { store } from '../App';
const LogoutLink = props => {
    return (
        <Link to="/" onClick={props.onLogout}>
            Log Out
        </Link>
    );
};

export default LogoutLink;