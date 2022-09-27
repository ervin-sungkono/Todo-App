import React from "react";

const InputField = ({label, id, type, placeholder}) => {
    return(
        <div className="input-field">
            <label htmlFor={id}>{label}</label>
            <div className="input-wrapper">
                <input type={type} id={id} placeholder={placeholder}/>
            </div>
        </div>
    )
}

export default InputField;