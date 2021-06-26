import React from 'react';
import './TodoAdd.css';

interface ComponentProps {
    onAdd: (name: string) => void
}

const TodoAdd : React.FC<ComponentProps> = ({onAdd}) : React.ReactElement => {

    const [todo, setTodo] = React.useState('');
    const handleChange = (e: any) => {
        setTodo(e.target.value);
    }

    return (
        <div className="add">
            <input type="text" placeholder="Моя новая задача..." value={todo} onChange={(e) => handleChange(e)} />
            <div className="add__icon" onClick={() => onAdd(todo)}>
                <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 1V15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1 8H15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
    );
};

export default TodoAdd;