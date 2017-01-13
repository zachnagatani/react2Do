import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import 'normalize.css';
import './App.css';
import './simple-grid.css';
import LogoContainer from './components/logo.js';
import UserForm from './components/userForm';
import TodoItem from './components/todoItem';
import TodoList from './components/todoList';
import SmallLink from './components/smallLink';
import DashboardContainer from './components/dashboardContainer';
import DashboardHeader from './components/dashboardHeader';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <LogoContainer />
        <Router history={browserHistory}>
          <Route path="/" component={UserForm} buttonText="Log In" questionText="New here?" linkText="Sign Up" linkTo="/signup" />
          <Route path="/signup" component={UserForm} buttonText="Sign Up" questionText="Come here often?" linkText="Log In" linkTo="/" />
          <Route path="/todolist" component={DashboardContainer} username="kittyfat101" />
        </Router>
      </div>
    );
  }
}

export default App;

