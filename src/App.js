import React, { Component } from 'react';
import './App.css';
import LogoContainer from './components/logo.js';
import UserForm from './components/userForm';
import TodoItem from './components/todoItem';
import TodoList from './components/todoList';
import SmallLink from './components/smallLink';
import DashboardHeader from './components/dashboardHeader';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LogoContainer />
        <UserForm buttonText="Log In" questionText="New here?" linkText="Sign Up" />

        <LogoContainer />
        <UserForm buttonText="Sign Up" questionText="Come here often?" linkText="Log In" />

        <DashboardHeader username="kittyfat101" />
        <TodoList />
        <SmallLink text="Log Out" />
      </div>
    );
  }
}

export default App;

