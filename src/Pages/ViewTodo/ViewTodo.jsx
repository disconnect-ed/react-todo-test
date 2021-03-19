import React from 'react';
import './View.scss'
import {useParams} from "react-router-dom"

const ViewTodo = ({todos}) => {
    
    const { id } = useParams()
    const currentTodo = todos.find(todo => todo.id == id)

    return (
        <div className='view'>
            <h2 className="view-title">
                {currentTodo.title}
            </h2>
            <p className='view-text'>
                {currentTodo.text}
            </p>
        </div>
    );
};

export default ViewTodo;