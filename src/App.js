import React, {useState} from 'react'
import {Switch, Route} from 'react-router-dom'
import './App.scss'
import Navbar from "./components/Navbar/Navbar";
import AllTodos from "./Pages/AllTodos/AllTodos";
import AddTodo from "./Pages/AddTodo/AddTodo";

function App() {


    return (
        <div className="app">
            <Navbar/>
            <Switch>
                <Route exact path='/' component={AllTodos}/>
                <Route exact path='/add' component={AddTodo}/>
            </Switch>
        </div>
    );
}

export default App;
