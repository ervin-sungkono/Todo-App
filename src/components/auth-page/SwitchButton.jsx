import React from "react";

const SwitchButton = ({activeState, setState}) => {
    return(
        <div className={`btn-wrapper ${activeState}`}>
            <div className={`switch-btn ${activeState === 'login' ? 'active' : ''}`} onClick={() => setState('login')}>Login</div>
            <div className={`switch-btn ${activeState === 'register' ? 'active' : ''}`} onClick={() => setState('register')}>Register</div>
        </div>
    )
}

export default SwitchButton;