import React from 'react';
import './AllTodos.scss'
import Input from "../../components/Input/Input";
import Todo from "../../components/Todo/Todo";

const AllTodos = ({todos, setTodos}) => {

    const deleteTodoHandler = (id) => {
        debugger
        const allTodos = [...todos]
        const currentTodo = todos.findIndex(todo => todo.id === id)
        const deletedTodo = allTodos.splice(currentTodo, 1)
        setTodos(allTodos)
    }

    return (
        <div className='all'>
            <Input placeholder='Поиск по тегу'/>
            <div className="all-todos">
                {todos && todos.map(item => <Todo title={item.title}
                                                  text={item.text}
                                                  key={item.id}
                                                  tags={item.tags}
                                                  id={item.id}
                                                  deleteTodo={deleteTodoHandler}
                />)}
            </div>
        </div>
    );
};

export default AllTodos;