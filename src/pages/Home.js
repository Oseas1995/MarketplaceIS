import React from "react"
import { Link } from "react-router-dom";

function Home (){
    return (
        <div>
            <h1>
                Home is Here
            </h1>
            <div className= "HomeContainer">
                <Link to="/login">
                    <button>
                        Log In
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Home;