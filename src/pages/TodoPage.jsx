import React from "react";

import CreateForm from "../components/todo-page/CreateForm";
import UpdateForm from "../components/todo-page/UpdateForm";

const TodoPage = ({submitFunc, findTodo, type}) => {
    const getForm = (type) => {
        switch(type){
            case 'create':
                return <CreateForm submitFunc={submitFunc}/>;
            case 'update':
                return <UpdateForm submitFunc={submitFunc} findTodo={findTodo}/>;
            default:
                return <></>
        }
    }
    return(
        <section id="todo-section">
            <div className="container">
                {getForm(type)}
            </div>
        </section>
    )
}

export default TodoPage;