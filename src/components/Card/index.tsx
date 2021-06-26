import React from 'react';

import { TodoModel } from '../../models';
import { TodoAdd, Todo } from '../../ui';
import './Card.css';

interface ComponentProps {
    title: string,
    color: string,
    tasks: Array<TodoModel>,
    onClick: (name: string) => void,
    onAdd: (name: string) => void,
    adder?: boolean
}

const Card : React.FC<ComponentProps> = ({title, color, tasks, onClick, onAdd, adder}) : React.ReactElement => {

    return (
        <div className="view__container">
            <div className="title">
                <h1 style={{color}}>{title}</h1>
                <svg width="28" height="28" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 12.0504V14.5834C0 14.8167 0.183308 15 0.41661 15H2.9496C3.05792 15 3.16624 14.9583 3.24123 14.875L12.34 5.78458L9.21542 2.66001L0.124983 11.7504C0.0416611 11.8338 0 11.9337 0 12.0504ZM14.7563 3.36825C14.8336 3.29116 14.8949 3.1996 14.9367 3.0988C14.9785 2.99801 15 2.88995 15 2.78083C15 2.6717 14.9785 2.56365 14.9367 2.46285C14.8949 2.36205 14.8336 2.27049 14.7563 2.19341L12.8066 0.24367C12.7295 0.166428 12.638 0.105146 12.5372 0.0633343C12.4364 0.021522 12.3283 0 12.2192 0C12.1101 0 12.002 0.021522 11.9012 0.0633343C11.8004 0.105146 11.7088 0.166428 11.6318 0.24367L10.107 1.76846L13.2315 4.89304L14.7563 3.36825V3.36825Z" fill="#aaa"/>
                </svg>
            </div>
            <div className="todo">
                <div className="todo__wrap">
                {tasks.map(({name, completed}) => <Todo key={name} name={name} completed={completed} onClick={onClick} />)}
                </div>
            </div>
            {adder && <TodoAdd onAdd={onAdd} />}
        </div>
    );
};

export default Card;