import React, { Component } from 'react';
import { DashboardHeaderContainer } from './dashboardHeaderContainer';
import TodoList from './todoList';
import { LogoutLinkContainer } from './logoutLinkContainer';
import AddButton from './addButton';

const DashboardContainer = props => {
    return (
        <div className="dashboard-container">
            <DashboardHeaderContainer />
            <TodoList />
            <LogoutLinkContainer />
            <AddButton />
        </div>
    );
};

export default DashboardContainer;