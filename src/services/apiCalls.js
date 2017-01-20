import { addTodo } from '../state/actions';

const apiCalls = {
    getTodosAndUpdateStore: (store, url, token) => {
        fetch(url, {
            headers: {
                Authorization: 'Bearer ' + token
            },
            method: 'GET'
        }).catch(function(error) {
            alert(error);
        }).then(function(response) {
            return response.text();
        }).then(function(todos){
            // self.props.pushTodosToState(JSON.parse(todos));
            JSON.parse(todos).forEach(todo => store.dispatch(addTodo(todo.todo, todo.isDone, todo._id)));
        })
    },

    deleteTodo: (store, url, id, token) => {
        fetch(url + id, {
            headers: {
                Authorization: 'Bearer ' + token
            },
            method: 'DELETE',
        }).catch(function(error) {
            alert(error);
        }).then(function(response) {
            if (response.status === 200) {
                console.log('deleted');
            }
        });
    }
};

export default apiCalls;