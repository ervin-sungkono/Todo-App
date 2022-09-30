import React from "react";

import InputField from "../auth-page/InputField";
import Button from "../common/Button";

const CreateForm = ({submitFunc}) => {
    return(
        <div id="todo-form" className="form">
            <div className="form-field">
                <InputField
                    label={'Title'}
                    id={'title'}
                    type={'text'}
                    placeholder={'Enter Todo Title...'}
                />
                <InputField
                    label={'Due Date'}
                    id={'due-date'}
                    type={'date'}
                />
            </div>
            <Button
                type={'primary-btn'}
                className={'create-btn'}
                text={'Create Todo'}
                clickFunc={submitFunc}
            />
        </div>
    )
}

export default CreateForm;