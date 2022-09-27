import React from "react";

const Button = ({type, className, text, clickFunc}) => {
    return(
        <div className={`${type} ${className}`} onClick={() => clickFunc()}>
            <p>{text}</p>
        </div>
    )
}

export default Button;