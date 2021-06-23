import { observable } from 'mobx';

export class TodoModel {
    @observable public name: string;
    @observable public completed: boolean;

    constructor(name: string, completed: boolean = false) {
        this.name = name;
        this.completed = completed;
    }
};

export default TodoModel;

