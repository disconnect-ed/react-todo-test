import React from 'react';
import './Input.scss'

const Input = ({value, onChange, placeholder = 'Введите заголовок заметки'}) => {
    return (
        <input type="text"
               placeholder={placeholder}
               value={value}
               onChange={(e) => onChange(e.target.value)}/>
    );
};

export default Input;