import React, { Component } from 'react';
import DashboardHeader from './dashboardHeader';
import TodoList from './todoList';

const DashboardContainer = props => {
    return (
        <div className="dashboard-container">
            <DashboardHeader username={props.route.username} />
            <TodoList />
        </div>
    );
};

export default DashboardContainer;