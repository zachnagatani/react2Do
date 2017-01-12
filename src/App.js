import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
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
        <Router history={browserHistory}>
          <Route path="/" component={UserForm} buttonText="Log In" questionText="New here?" linkText="Sign Up"/>
        </Router>
      </div>
    );
  }
}

export default App;

