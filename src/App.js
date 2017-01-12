import React, { Component } from 'react';
import './App.css';
import LogoContainer from './components/logo.js';
import UserForm from './components/userForm';
import TodoItem from './components/todoItem';
import TodoList from './components/todoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LogoContainer />
        <UserForm buttonText="Log In" questionText="New here?" linkText="Sign Up" />
        <UserForm buttonText="Sign Up" questionText="Come here often?" linkText="Log In" />
        <TodoList />
      </div>
    );
  }
}

export default App;

