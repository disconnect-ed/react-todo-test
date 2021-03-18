import React from 'react';
import './AddTodo.scss'
import Input from "../../components/Input/Input";
import TextArea from "../../components/TextArea/TextArea";
import Button from "../../components/Button/Button";

const AddTodo = () => {
    return (
        <div className='add container'>
            <h2 className='add-title'>Новая заметка</h2>
            <Input/>
            <TextArea/>
            <Button title='Добавить'
                    color='white'
                    background='#1D92FF'/>
        </div>
    );
};

export default AddTodo;