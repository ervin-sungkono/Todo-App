import React, { useEffect } from "react";

import Icon from '../base/Icon';

const HeroSection = ({filterTodos}) => {
    let searchField;
    useEffect(() => {
        searchField = document.getElementById('search');
        window.addEventListener('keypress',(e) =>{
            if(e.key === 'Enter'){
                filterTodos(searchField.value);
            }
        })
    });
    return(
        <div className="hero-section">
            <h2 className="hero-title">
                All Your <span>Activities,</span> Organized in a <span>Single Page.</span>
            </h2>
            <div className="search-box">
                <input type="text" name="search" id="search" placeholder="Search Todos..."/>
                <div className="primary-btn search-btn" onClick={() => filterTodos(searchField.value)}>
                    <Icon type={'search'}/>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;