import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import 'normalize.css';
import './App.css';
import './simple-grid.css';
import LogoContainer from './components/logo.js';
import UserForm from './components/userForm';
import { UserFormContainer } from './components/userFormContainer';
import TodoItem from './components/todoItem';
import TodoList from './components/todoList';
import SmallLink from './components/smallLink';
import DashboardContainer from './components/dashboardContainer';
import DashboardHeader from './components/dashboardHeader';
import { createStore, combineReducers } from 'redux';
import { ADD_TODO, addTodo, LOGIN, login, LOGOUT, logout, TOGGLE_TODO, toggleTodo, DANGEROUSLY_CLEAR_TODOS, dangerouslyClearTodos } from './state/actions';
import auth from './services/auth';

/**
 * @param state - todos array from the state. defaults to an empty array
 * @param {Object} action - the action object with the info to update the state
 * @returns {Array} an updated copy of the todos array, or the default state
 */
function todosReducer(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          todo: action.todo,
          isDone: action.isDone,
          id: action.id
        }
      ];
    case TOGGLE_TODO:
      return Object.assign({}, state, {
        todos: state.map((todo, id) => {
          if (id === todo.id) {
            return Object.assign({}, todo, {
              isDone: !todo.isDone
            });
          }
          return todo;
        })
      });
    case DANGEROUSLY_CLEAR_TODOS:
      return [];
    default:
      return state;
  } 
}


/**
 * @param {String} state - the username from the state. defaults to null
 * @returns {Array} an updated copy of the todos array, or the default state
 * @returns {String} the username of to update the state, or the default state
 */
function loginReducer(state = '', action) {
  switch(action.type) {
    case LOGIN:
      return action.username;
    case LOGOUT:
      return action.username;
    default:
      return state;  
  }
}

/**
 * Hub for combining the reducers and receiving actions
 */
const reactToDo = combineReducers({
  username: loginReducer,
  todos: todosReducer
});

export let store = createStore(reactToDo);

function requireAuth(nextState, replaceState) {
  if (!auth.isLoggedIn()) {
    replaceState({ nextPathname: nextState.location.pathname }, '/');
  }
}

class App extends Component {
  render() {
    return (
      <div className="App container">
        <LogoContainer />
        <Router history={browserHistory}>
          <Route path="/" component={UserFormContainer} buttonText="Log In" questionText="New here?" linkText="Sign Up" linkTo="/signup" />
          <Route path="/signup" component={UserFormContainer} buttonText="Sign Up" questionText="Come here often?" linkText="Log In" linkTo="/" />
          <Route path="/todolist" component={DashboardContainer} onEnter={requireAuth} />
        </Router>
      </div>
    );
  }
}

export default App;

