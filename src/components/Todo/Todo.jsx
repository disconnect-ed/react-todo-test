import React from 'react';
import './Todo.scss'
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {faPencilAlt} from "@fortawesome/free-solid-svg-icons";
import {faEye} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NavLink} from "react-router-dom";

const Todo = ({title, id, tags, deleteTodo}) => {
    return (
        <div className='todo'>
            <div className='todo-content'>
                <h3 className='todo-title'>
                    Заголовок: {title}
                </h3>
                <div className='todo-tags'>
                    Теги: {tags.map(tag => <span key={tag}>#{tag}</span>)}
                </div>
            </div>
            <div className='todo-actions'>
                <NavLink to={`/view/${id}`} className="todo-action">
                    <FontAwesomeIcon size='lg' color='white' icon={faEye} />
                </NavLink>
                <NavLink to={`/edit/${id}`} className="todo-action">
                    <FontAwesomeIcon size='lg' color='lime' icon={faPencilAlt} />
                </NavLink>
                <button onClick={() => deleteTodo(id)} className="todo-action">
                    <FontAwesomeIcon size='lg' color='red' icon={faTrash} />
                </button>
            </div>
        </div>
    );
};

export default Todo;