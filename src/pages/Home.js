import React from "react"
import { Link } from "react-router-dom";
import "./Home.css"
function Home() {
    return (
        <nav className="navbar-home">
            <h1 className="ass">Home is Here and it's nothing special</h1>
            <div className="nav-container">                
                <ul className="nav-links">
                    <Link to="/login">
                        <ul>Login</ul>
                    </Link>
                    <Link to="/register">
                        <ul>SignUp</ul>                       
                    </Link>
                </ul>
            </div>
        </nav>
    )
}

export default Home;