import React, { useEffect, useState } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';

import HomePage from './pages/HomePage';
import CalendarPage from './pages/CalendarPage';
import AuthPage from './pages/AuthPage';
import TodoPage from './pages/TodoPage';
import NotFoundPage from './pages/NotFoundPage';

import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

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

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
  }

  const [token, setToken] = useState(getToken());
  const [showNav, setNav] = useState(true);
  const [showFooter, setFooter] = useState(true);
  const [showLinks, setLinks] = useState(true);
  const [todos, setTodos] = useState(null);

  const baseURL = "https://todo-app-api.glitch.me";
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
  const findTodo = (id) => {
    const todo = fetch(`${baseURL}/todo/${id}?token=${token}`)
      .then(res => res.json())
      .catch(err => console.log(err));
    return todo;
  }
  const createTodo = async() => {
    const title = document.getElementById('title').value;
    const due_date = document.getElementById('due-date').value;
    if(!title || !due_date){
      alert('Please fill in all the fields');
      return;
    }
    const result = await fetch(`${baseURL}/todo/?token=${token}`,{
      method:'POST',
      body: JSON.stringify({
        title: title,
        due_date: due_date
      }),
      headers: {
        "Content-type": "application/json"
      }
    })
      .then(res => res.json())
      .catch(err => console.log(err));
    if(result){
      alert(result.message);
      fetchTodo();
    }
  }
  const updateTodo = async(id, title, due_date, completed) => {
    if(!title || !due_date){
      alert('Please fill in all the fields');
      return;
    }
    const result = await fetch(`${baseURL}/todo/${id}?token=${token}`,{
      method:'PATCH',
      body: JSON.stringify({
        title: title,
        due_date: due_date,
        completed: completed
      }),
      headers: {
        "Content-type": "application/json"
      }
    })
      .then(res => res.json())
      .catch(err => console.log(err));
    if(result){
      fetchTodo();
    }
  }
  const deleteTodo = async(id) => {
    const result = await fetch(`${baseURL}/todo/${id}?token=${token}`,{
      method:'DELETE'
    })
      .then(res => res.json())
      .catch(err => console.log(err));
    if(result){
      alert(result.message);
      fetchTodo();
    }
  }

  return (
    <HashRouter>
      {showNav ? <Navbar showLinks={showLinks} logout={logout}/> : ""}
      {!token ? 
      <AuthPage createToken={createToken} setLinks={setLinks} baseURL={baseURL}/>
      :
      <Routes>
        <Route exact path = '/' element={<HomePage todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo}/>}/>
        <Route exact path = '/calendar' element={<CalendarPage todos={todos}/>}/>
        <Route exact path = '/create' element={<TodoPage submitFunc={createTodo} type={'create'}/>} />
        <Route exact path = '/update/:id' element={<TodoPage submitFunc={updateTodo} findTodo={findTodo} type={'update'}/>}/>
        <Route exact path = '/404' element={<NotFoundPage setNav={setNav} setFooter={setFooter}/>}/>
        <Route path = '*' element={<Navigate replace to="/404"/>}/>
      </Routes>
      }
      {showFooter ? <Footer/> : ""}
    </HashRouter>
  );
}

export default App;
