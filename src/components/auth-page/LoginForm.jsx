import React from "react";

import InputField from "./InputField";
import PasswordField from "./PasswordField";
import Button from "../common/Button";

const LoginForm = ({userLogin}) => {
    return(
        <div id="login-form" className="form">
            <div className="form-field">
                <InputField
                    label={'Username'}
                    id={'username'}
                    type={'text'}
                    placeholder={'Enter Username...'}
                />
                <PasswordField
                    label={'Password'}
                    id={'password'}
                    type={'password'}
                    placeholder={'Enter Password...'}
                    icon={'eye-slash'}
                    icon2={'eye-noslash'}
                />
            </div>
            <Button
                type={'primary-btn'}
                className={'login-btn'}
                text={'Login'}
                clickFunc={userLogin}
            />
        </div>
    )
}

export default LoginForm;