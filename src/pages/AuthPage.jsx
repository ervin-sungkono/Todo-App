import React, { useEffect, useState } from "react";

import LoginForm from '../components/auth-page/LoginForm';
import RegisterForm from "../components/auth-page/RegisterForm";
import SwitchButton from "../components/auth-page/SwitchButton";

const AuthPage = ({createToken, setLinks, baseURL}) => {
    const [authState, setState] = useState('login');
    const userLogin = async() => {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        if(!username || !password){
            alert('Please fill in all the fields');
            return;
        }
        const user = await fetch(`${baseURL}/user/login`, {
            method: 'POST',
            body: JSON.stringify({
                username: username,
                password: password
            }),
            headers: {
                "Content-type": "application/json"
            }
        })
        .then(res => {
            if(res.ok) return res.json();
            else throw new Error(res.status);
        })
        .catch(err => console.log(err))
        if(user){
            alert(`Welcome back, ${user.username}`);
            createToken(user.token);
            setLinks(true);
        }else{
            alert('Username or password is incorrect, please try again');
        }
    }
    const validateForm = (username, email, password, confirmPassword) => {
        const errorMessage = [];
        if(!username){
            errorMessage.push('Username cannot be empty');
        }
        if(!email.includes('@') || !email.endsWith('.com')){
            errorMessage.push('Email must contain @ and ends with .com');
        }
        if(password.length < 5){
            errorMessage.push('Password length must be atleast 5 characters');
        }
        if(!(password === confirmPassword)){
            errorMessage.push('Password must match confirm password');
        }
        return errorMessage;
    }
    const userRegister = async() => {
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        const errorMessage = validateForm(username, email, password, confirmPassword);
        if(errorMessage){
            alert(errorMessage.join('\n'));
            return;
        }
        const user = await fetch(`${baseURL}/user/register`, {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                username: username,
                password: password,
                confirmPassword: confirmPassword
            }),
            headers: {
                "Content-type": "application/json"
            }
        })
        .then(res => {
            if(res.ok) return res.json();
            else throw new Error(res.status);
        })
        .catch(err => console.log(err))
        alert(user ? 'Register Successful' : 'Register Failed');
    }
    const getState = () => {
        switch(authState){
            case 'login':
                return <LoginForm userLogin={userLogin}/>;
            case 'register':
                return <RegisterForm userRegister={userRegister}/>;
            default:
                return <></>;
        }
    }
    useEffect(() => setLinks(false))
    return(
        <section id="auth-page">
            <div className="container">
                {getState()}
                <SwitchButton activeState={authState} setState={setState}/>
            </div>
        </section>
    )
}

export default AuthPage;