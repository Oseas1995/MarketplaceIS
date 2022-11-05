import React, {useEffect}from "react"
import { Link, useNavigate } from "react-router-dom";
import "./Home.css"
import { supabase } from '../supabase/supabase';
function Home() {
    const navigate = useNavigate();

    useEffect(() => {
      supabase.auth.onAuthStateChange((event, session) => {
        if (!session) {
          console.log(event,session);
          navigate('/login')
        } else {
          navigate('/home')
        }
      })
    }, [])

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