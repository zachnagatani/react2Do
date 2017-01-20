import React, { Component } from 'react';
import { DashboardHeaderContainer } from './dashboardHeaderContainer';
import { TodoListContainer } from './todoListContainer';
import { LogoutLinkContainer } from './logoutLinkContainer';
import AddButton from './addButton';

const DashboardContainer = props => {
    return (
        <div className="dashboard-container">
            <DashboardHeaderContainer />
            <TodoListContainer />
            <LogoutLinkContainer />
            <AddButton />
        </div>
    );
};

export default DashboardContainer;