import React from 'react';
import './Navbar.scss'
import Button from "../Button/Button";
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className='nav'>
            <NavLink className='nav-link' to='/add'>
                <Button title='Добавить'>
                    <FontAwesomeIcon icon={faPlus} />
                </Button>
            </NavLink>
            <h1 className='nav-title'>
                Заметки
            </h1>
        </nav>
    );
};

export default Navbar;