import { observable } from 'mobx';
import TodoModel from './TodoModel';

export class SelecterModel {
    readonly id: number;
    @observable public title: string;
    @observable public color: string;
    @observable public tasks: Array<TodoModel>;

    constructor(id: number, title: string, color: string, tasks: Array<TodoModel> = []) {
        this.id = id;
        this.title = title;
        this.color = color;
        this.tasks = tasks;
    }
}

export default SelecterModel;