import React, {useState} from 'react'
import {Switch, Route} from 'react-router-dom'
import './App.scss'
import Navbar from "./components/Navbar/Navbar";
import AllTodos from "./Pages/AllTodos/AllTodos";
import AddTodo from "./Pages/AddTodo/AddTodo";
import ViewTodo from "./Pages/ViewTodo/ViewTodo";
import EditTodo from "./Pages/EditTodo/EditTodo";

function App() {

    const [todos, setTodos] = useState([{title: 'one', text: 'two', tags: ['march'], id: 1} ])

    return (
        <div className="app">
            <Navbar/>

                <div className="container">
                    <Route exact path='/'
                           render={() => <AllTodos todos={todos} setTodos={setTodos}/>}/>
                    <Route exact path='/add'
                           render={() => <AddTodo todos={todos} setTodos={setTodos}/>}/>
                    <Route exact path='/view/:id'
                           render={() => <ViewTodo todos={todos}/>}/>
                    <Route exact path='/edit/:id'
                           render={() => <EditTodo todos={todos} setTodos={setTodos}/>}/>
                </div>

        </div>
    );
}

export default App;
