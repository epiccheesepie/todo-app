import { observable, computed, action } from 'mobx';
import { SelecterModel } from '../models';

export class TodoStore {
    @observable public todos: Array<SelecterModel> = [];

    @computed
    get getTodos() {
        return this.todos;
    }

    @action
    setTodos = (todos: Array<SelecterModel>): void => {
        this.todos = todos;
    }
};

export default TodoStore;