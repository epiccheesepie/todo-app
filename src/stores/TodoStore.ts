import { computed, action, observable, makeObservable } from 'mobx';
import { SelecterModel, TodoModel } from '../models';

class TodoStore {
    @observable public todos: Array<SelecterModel> = [];

    constructor() {
        makeObservable(this);
    }

    @computed
    get getTodos() : Array<SelecterModel> {
        return this.todos;
    }

    @action
    setTodos = (todos: Array<SelecterModel>): void => {
        this.todos = todos;
    }

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
    addSelecter = (title: string) => {
        this.todos.push(new SelecterModel(title));
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

    @action
    removeTodo = (id: number, name: string) => {
        
        this.todos = this.todos.map((selecter) => {
            if (selecter.id === id) {
                selecter.tasks = selecter.tasks.filter((task) => task.name !== name);
            }
            return selecter;
        })
    }

    @action
    removeSelecter = (id: number) => {
        this.todos = this.todos.filter((selecter) => selecter.id !== id);
    }
};

export default TodoStore;