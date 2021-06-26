import { observable } from 'mobx';
import TodoModel from './TodoModel';

export class SelecterModel {
    readonly id: number;
    @observable public title: string;
    @observable public color: string;
    @observable public tasks: Array<TodoModel>;

    constructor(title: string, tasks: Array<TodoModel> = []) {
        this.id = SelecterModel.generateId();
        this.title = title;
        this.color = SelecterModel.randomColor();
        this.tasks = tasks;
    }

    static nextId = 3; //количество подгружаемых тудушек
    static generateId() {
        return this.nextId++;
    }

    static randomColor() {
        return '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
    }
}

export default SelecterModel;