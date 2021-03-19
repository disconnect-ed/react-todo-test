import React from 'react';
import './AddTodo.scss'
import Input from "../../components/Input/Input";
import TextArea from "../../components/TextArea/TextArea";
import Button from "../../components/Button/Button";
import { useHistory } from "react-router-dom";
import Tags from 'react-tagging-input';

const AddTodo = ({todos, setTodos}) => {

    const [title, setTitle] = React.useState('')
    const [text, setText] = React.useState('')
    const [tags, setTags] = React.useState([])
    const history = useHistory()

    const addTodoHandler = () => {
        const newTodo = {
            title,
            text,
            id: Date.now(),
            tags: ['aa']
        }
        setTodos(prev => [newTodo, ...prev])
        history.push('/')
    }


    return (
        <div className='add'>
            <h2 className='add-title'>Новая заметка</h2>
            <Input value={title} onChange={setTitle}/>
            <TextArea value={text} onChange={setText}/>
            <Button title='Добавить'
                    onClick={addTodoHandler}
                    color='white'
                    background='#1D92FF'/>
        </div>
    );
};

export default AddTodo;