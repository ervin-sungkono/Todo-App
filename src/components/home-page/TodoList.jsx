import React from "react";

import TodoCard from "./TodoCard";

const TodoList = ({todos, filter, updateTodo, deleteTodo}) => {
    return(
        <div className="todo-wrapper">
            {todos ? todos.filter((todo) => todo.title.toLowerCase().includes(filter)).map((todo) => 
                <TodoCard todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
                ):
                <div className="loader-container">
                    <div className="loader">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                    <h2>Loading...</h2>
                </div>
            }
        </div>
    )
}

export default TodoList;