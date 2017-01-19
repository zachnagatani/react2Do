import React, { Component } from 'react';
import { DashboardHeaderContainer } from './dashboardHeaderContainer';
import TodoList from './todoList';
import SmallLink from './smallLink';
import AddButton from './addButton';

const DashboardContainer = props => {
    return (
        <div className="dashboard-container">
            <DashboardHeaderContainer />
            <TodoList />
            <SmallLink linkTo="/" text="Log Out" />
            <AddButton />
        </div>
    );
};

export default DashboardContainer;