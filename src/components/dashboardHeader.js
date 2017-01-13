import React, {Component} from 'react';

const DashboardHeader = props => {
    return (
        <header className="dashboard-header">
            <p>How's it goin', {props.username}?</p>
        </header>
    );
};

export default DashboardHeader;