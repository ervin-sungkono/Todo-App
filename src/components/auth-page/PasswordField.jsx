import React, { useState } from "react";

import Icon from "../base/Icon";

const PasswordField = ({label, id, type, placeholder, icon = '', icon2 = ''}) => {
    const [hidden, setHidden] = useState(true);
    const toggleHidden = () => {
        setHidden(!hidden);
    }
    return(
        <div className="input-field">
            <label htmlFor={id}>{label}</label>
            <div className="input-wrapper">
                <input type={hidden ? type : "text"} id={id} placeholder={placeholder}/>
                <div className="icon-wrapper" onClick={() => toggleHidden()}>
                    {hidden ? <Icon type={icon}/> : <Icon type={icon2}/>}
                </div>
            </div>
        </div>
    )
}

export default PasswordField;