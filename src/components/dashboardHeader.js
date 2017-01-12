import React, {Component} from 'react';
import LogoContainer from './logo';

const DashboardHeader = props => {
    return (
        <header className="dashboard-header">
            <LogoContainer />
            <p>How's it goin', {props.username}?</p>
        </header>
    );
};

export default DashboardHeader;