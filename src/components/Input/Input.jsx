import React from 'react';
import './Input.scss'

const Input = ({value, onChange, }) => {
    return (
        <input type="text"
               placeholder='Введите заголовок заметки'
               value={value}
               onChange={onChange}/>
    );
};

export default Input;