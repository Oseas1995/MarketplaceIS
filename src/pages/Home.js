import React from "react"
import { Link } from "react-router-dom";
import "./Home.css"
function Home() {
    return (

        <nav className="navbar-home">
            <div className="nav-container">
                <h3 className="ass">Home is Here and it's nothing special</h3>
                <ul className="nav-links">
                    <Link to="/login">
                        <ul>Log In</ul>
                    </Link>
                    <Link to="/register">
                        <ul>Sign Up</ul>                       
                    </Link>
                </ul>
            </div>
        </nav>
    )
}

export default Home;