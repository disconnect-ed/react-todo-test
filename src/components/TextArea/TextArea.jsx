import React from 'react';
import './TextArea.scss'

const TextArea = ({value, onChange}) => {
    return (
        <textarea value={value}
                  onChange={(e) => onChange(e.target.value)}
                  placeholder='Введите содержимое заметки'
        >
        </textarea>
    );
};

export default TextArea;