import React, { useEffect, useState } from "react";
import { Navigate, Link } from "react-router-dom";

import Icon from "../base/Icon";

const TodoCard = ({todo, updateTodo, deleteTodo}) => {
    const options = { day:'numeric', month:'short', year:'numeric' };
    const [isCompleted, setCompleted] = useState(todo.completed);
    const toggleComplete = () => {
        setCompleted(1 - isCompleted);
    }
    let timeout;
    useEffect(() => {
        timeout = setTimeout(() => {
            updateTodo(todo.id, todo.title, todo.due_date.split('T')[0], isCompleted);
        }, 1000);
        return () => {
            clearTimeout(timeout);
        }
    },[isCompleted]);
    useEffect(() => setCompleted(todo.completed), [todo.completed]);
    
    return(
        <div className="todo-card">
            <div className="todo-content">
                <div className="todo-details">
                    <div className={`todo-title ${isCompleted ? "strike-through" : ""}`}>{todo.title}</div>
                    <div className="todo-duedate">{`Due: ${new Date(todo.due_date).toLocaleDateString('en-GB',options)}`}</div>
                </div>
                <div className={`custom-checkbox ${isCompleted ? "active" : ""}`} onClick={() => toggleComplete()}>
                    {isCompleted ? <Icon type={'check'}/> : ""}
                </div>
            </div>
            <div className="todo-btn-wrapper">
                <Link exact to={`/update/${todo.id}`} className="edit-btn"><Icon type={'edit'}/></Link>
                <div className="del-btn" onClick={() => deleteTodo(todo.id)}><Icon type={'trash'}/></div>
            </div>
        </div>
    )
}

export default TodoCard;