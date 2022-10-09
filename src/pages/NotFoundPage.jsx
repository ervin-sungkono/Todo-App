import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFoundPage = ({setNav, setFooter}) => {
    useEffect(() => {
        setNav(false);
        setFooter(false);
    })
    return(
        <section id="error-page">
            <div className="container">
                <div className="error-content">
                    <div className="title">404 Not Found</div>
                    <div className="description">The page you are looking for is not found.</div>
                </div>
                <Link exact to="/" className="primary-btn home-btn" onClick={() => {setNav(true); setFooter(true)}}><p>Go Back Home</p></Link>
            </div>
        </section>
    )
}

export default NotFoundPage;