import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import HomePage from './pages/HomePage';
import CalendarPage from './pages/CalendarPage';
import AuthPage from './pages/AuthPage';
import NotFoundPage from './pages/NotFoundPage';

import Navbar from './components/common/Navbar';

import './styles/main.scss';

function App() {
  const createToken = (token) => {
    setToken(token);
    localStorage.setItem('token', token);
    const time = new Date().getTime();
    localStorage.setItem('created_at', time);
  }

  const getToken = () => {
    var hours = 3;
    var now = new Date().getTime();
    var setupTime = localStorage.getItem('created_at');
    if (setupTime == null) {
        localStorage.setItem('created_at', now)
    } else {
        if(now - setupTime > hours*60*60*1000) {
            localStorage.removeItem('token');
        }
    }

    const token = localStorage.getItem('token') || null;
    return token;
  }

  const [token, setToken] = useState(getToken());
  const [showNav, setNav] = useState(true);
  const [showLinks, setLinks] = useState(true);
  const [todos, setTodos] = useState([]);

  const baseURL = "https://todo-app-be-09.herokuapp.com";
  const fetchTodo = () => {
    if(token)
    fetch(`${baseURL}/todo/?token=${token}`)
      .then(res => res.json())
      .then(data => setTodos(data))
      .catch(err => console.log(err));
  };
  useEffect(() =>{
    fetchTodo();
  },[token]);

  return (
    <BrowserRouter>
      {showNav ? <Navbar showLinks={showLinks}/> : ""}
      {!token ? 
      <AuthPage createToken={createToken} setLinks={setLinks} baseURL={baseURL}/>
      :
      <Routes>
        <Route exact path = '/' element={<HomePage todos={todos}/>}/>
        <Route exact path = '/calendar' element={<CalendarPage todos={todos}/>}/>
        <Route exact path = '/404' element={<NotFoundPage setNav={setNav}/>}/>
        <Route path = '*' element={<Navigate replace to="/404"/>}/>
      </Routes>
      }
    </BrowserRouter>
  );
}

export default App;
