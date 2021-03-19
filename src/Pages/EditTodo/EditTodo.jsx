import React from 'react';
import './EditTodo.scss'
import {useHistory, useParams} from "react-router-dom";
import Input from "../../components/Input/Input";
import TextArea from "../../components/TextArea/TextArea";
import Button from "../../components/Button/Button";

const EditTodo = ({todos, setTodos}) => {
    const { id } = useParams()
    const currentTodo = todos.find(todo => todo.id === +id)
    const [title, setTitle] = React.useState(currentTodo.title)
    const [text, setText] = React.useState(currentTodo.text)
    const history = useHistory()

    const editTodoHandler = () => {
        const todoIndex = todos.findIndex(todo => todo.id == id)
        const allTodos = [...todos]
        allTodos[todoIndex] = {
            title,
            text,
            id,
            tags: currentTodo.tags
        }
        setTodos(allTodos)
        history.push('/')
    }

    return (
        <div className='add'>
            <h2 className='add-title'>Редактировать заметку</h2>
            <Input value={title} onChange={setTitle}/>
            <TextArea value={text} onChange={setText}/>
            <Button title='Редактировать'
                    onClick={editTodoHandler}
                    color='white'
                    background='#1D92FF'/>
        </div>
    )
};

export default EditTodo;