import React, {Component} from 'react';
import auth from '../services/auth';

const DashboardHeader = props => {
    return (
        <header className="dashboard-header">
            <p>How's it goin', {auth.currentUser().username}?</p>
        </header>
    );
};

export default DashboardHeader;