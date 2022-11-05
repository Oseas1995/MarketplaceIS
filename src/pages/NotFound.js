import React from 'react';
import { Link } from 'react-router-dom';
import "./NotFound.css"

export default function NotFound(){
    return(
        <div id="Emain">
                <div class="fof">
                        <h1>Error 404</h1>
                        <h2>....Bueeno pareces perdido, por que no le das a este enlace para regresar?</h2>
                        <Link to = "/home">
                            <ul>Home</ul>
                        </Link>
                </div>
        </div>
    );
}

 