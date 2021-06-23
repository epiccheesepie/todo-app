import { observable } from 'mobx';
import TodoModel from './TodoModel';

export class SelecterModel {
    readonly id: number;
    @observable public title: string;
    @observable public color: string;
    @observable public tasks: Array<TodoModel>;

    constructor(title: string, color: string, tasks: Array<TodoModel> = []) {
        this.id = SelecterModel.generateId();
        this.title = title;
        this.color = color;
        this.tasks = tasks;
    }

    static nextId = 3;
    static generateId() {
        return this.nextId++;
    }
}

export default SelecterModel;