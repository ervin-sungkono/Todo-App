import React from "react";

import InputField from "./InputField";
import PasswordField from "./PasswordField";
import Button from "../common/Button";

const RegisterForm = ({userRegister}) => {
    return(
        <div id="register-form" className="form">
            <div className="form-field">
                <InputField
                    label={'Username'}
                    id={'username'}
                    type={'text'}
                    placeholder={'Enter Username...'}
                />
                <InputField
                    label={'Email'}
                    id={'email'}
                    type={'text'}
                    placeholder={'Enter Email...'}
                />
                <PasswordField
                    label={'Password'}
                    id={'password'}
                    type={'password'}
                    placeholder={'Enter Password...'}
                    icon={'eye-slash'}
                    icon2={'eye-noslash'}
                />
                <PasswordField
                    label={'Confirm Password'}
                    id={'confirm-password'}
                    type={'password'}
                    placeholder={'Enter Confirm Password...'}
                    icon={'eye-slash'}
                    icon2={'eye-noslash'}
                />
            </div>
            <Button
                type={'primary-btn'}
                className={'register-btn'}
                text={'Register'}
                clickFunc={userRegister}
            />
        </div>
    )
}

export default RegisterForm;