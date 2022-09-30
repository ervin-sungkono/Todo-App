import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import InputField from "../auth-page/InputField";
import Button from "../common/Button";

const UpdateForm = ({submitFunc, findTodo}) => {
    const {id} = useParams();
    const [todo,setTodo] = useState(null);
    const getTodo = async() => {
        setTodo(await findTodo(id));
    }
    const updateTodo = () => {
        const title = document.getElementById('title').value;
        const due_date = document.getElementById('due-date').value;
        submitFunc(id, title, due_date, todo.completed);
    }
    useEffect(() => {
        getTodo();
    },[])
    return(
        <div id="todo-form" className="form">
            <div className="form-field">
                <InputField
                    label={'Title'}
                    id={'title'}
                    type={'text'}
                    placeholder={'Enter Todo Title...'}
                    defaultValue={todo ? todo.title : ""}
                />
                <InputField
                    label={'Due Date'}
                    id={'due-date'}
                    type={'date'}
                    defaultValue={todo ? todo.due_date.split('T')[0] : ""}
                />
            </div>
            <Button
                type={'primary-btn'}
                className={'update-btn'}
                text={'Update Todo'}
                clickFunc={() => {
                    updateTodo();
                    alert('Todo Updated!');
                }}
            />
        </div>
    )
}

export default UpdateForm;