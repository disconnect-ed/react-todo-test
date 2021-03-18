import React from 'react';
import './TextArea.scss'

const TextArea = ({value, onChange}) => {
    return (
        <textarea value={value}
                  onChange={onChange}
                  placeholder='Введите содержимое заметки'
        >
        </textarea>
    );
};

export default TextArea;