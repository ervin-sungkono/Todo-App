import React, { useState } from "react";

import HeroSection from "../components/home-page/HeroSection";
import TodoList from "../components/home-page/TodoList";

const HomePage = ({todos, updateTodo, deleteTodo}) => {
    const [filter, setFilter] = useState('');
    let timeout;
    const filterTodos = (input) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => setFilter(input), 250);
    }
    return(
        <section id="home-page">
            <div className="container">
                <HeroSection filterTodos={filterTodos}/>
                <TodoList todos={todos} filter={filter} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
            </div>  
        </section>
    )
}

export default HomePage;