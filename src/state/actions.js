export const LOGIN = 'LOGIN';
export function login(username) {
    return {
        type: LOGIN,
        username
    }
}

export const ADD_TODO = 'ADD_TODO';
export function addTodo(todo, isDone, id) {
    return {
        type: ADD_TODO,
        todo,
        isDone,
        id
    }
}

export const TOGGLE_TODO = 'TOGGLE_TODO';
export function toggleTodo(id) {
    return {
        type: TOGGLE_TODO,
        id
    }
}

export const DANGEROUSLY_CLEAR_TODOS = 'CLEAR_TODOS';
export function dangerouslyClearTodos() {
    return {
        type: DANGEROUSLY_CLEAR_TODOS
    }
}