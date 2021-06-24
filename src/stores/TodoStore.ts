import { observable, computed, action } from 'mobx';
import { SelecterModel, TodoModel } from '../models';

class TodoStore {
    @observable public todos: Array<SelecterModel> = [];

    @computed
    get getTodos() : Array<SelecterModel> {
        return this.todos;
    }

    @action
    setTodos = (todos: Array<SelecterModel>): void => {
        this.todos = todos;
    }

    // @action
    // fetchTodo = () => {
    //     fetch('http://localhost:3000/todos.json')
    //     .then(response => response.json())
    //     .then(json => {
    //       this.todos = json;
    //     })
    // }

    @action
    setCompleted = (id: number, name: string) => {

        this.todos = this.todos.map((selecter) => {
            if (selecter.id === id) {
                selecter.tasks = selecter.tasks.map(todo => {
                    if (todo.name === name) {
                        todo.completed = !todo.completed;
                    }
                    return todo;
                })
            }
            return selecter;
        });
    }

    @action
    addSelecter = (title: string, color: string) => {
        const id = this.todos.length;
        this.todos.push(new SelecterModel(id, title, color));
    }

    @action
    addTodo = (id: number, name: string) => {

        this.todos = this.todos.map((selecter) => {
            if (selecter.id === id) {
                selecter.tasks.push(new TodoModel(name));
            }
            return selecter;
        })
    }
};

export default TodoStore;