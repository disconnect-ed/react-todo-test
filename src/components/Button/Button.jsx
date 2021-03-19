import React from 'react';
import './Button.scss'

const Button = ({color, background, title, children, onClick}) => {
    const style = {color, background}
    return (
        <button className='btn' onClick={onClick} style={style}>
            <div>{title}</div>
            <div>{children}</div>
        </button>
    );
};

export default Button;