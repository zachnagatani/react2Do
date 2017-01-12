import React, {Component} from 'react';
import logo from '../logo.svg';

const LogoContainer = props => {
    return (
        <div className="logo-container">
            <img src={logo} className="App-logo" alt="logo" />
        </div>
    );
};

export default LogoContainer;