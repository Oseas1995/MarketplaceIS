<<<<<<< HEAD
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
=======
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <nav class="navbar navbar-dark bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand">E-Commerce </a>
          <form class="d-flex" role="search">
            <Link to="/login">
              <button type="button" class="btn btn-secondary btn-sm">
                Ingresar
              </button>
            </Link>

            <button type="button" class="btn btn-secondary btn-sm">
              Whish List
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
>>>>>>> 8411f4ca59a4e1732259c25431c54bd2bea4f2e6
}

export default Home;
