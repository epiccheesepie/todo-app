import React from 'react';
import './TodoAdd.css';

const TodoAdd : React.FC = () : React.ReactElement => {

    return (
        <div className="add">
            <input type="text" placeholder="Моя новая задача..." />
            <div className="add__icon">
                <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 1V15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1 8H15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
    );
};

export default TodoAdd;