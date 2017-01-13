import React, { Component } from 'react';
import DashboardHeader from './dashboardHeader';
import TodoList from './todoList';
import SmallLink from './smallLink';
import AddButton from './addButton';

const DashboardContainer = props => {
    return (
        <div className="dashboard-container">
            <DashboardHeader username={props.route.username} />
            <TodoList />
            <SmallLink linkTo="/" text="Log Out" />
            <AddButton />
        </div>
    );
};

export default DashboardContainer;