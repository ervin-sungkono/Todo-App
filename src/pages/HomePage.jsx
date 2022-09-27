import React from "react";
import { useEffect } from "react";

const HomePage = ({todos}) => {
    useEffect(() => console.log(todos))
    return(
        <section id="home-page">
            {todos.map((todo) => 
                <div>{todo.title} {todo.completed}</div>
            )}
        </section>
    )
}

export default HomePage;