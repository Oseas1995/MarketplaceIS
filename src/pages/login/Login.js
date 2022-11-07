

import React from 'react'
import {useState} from 'react'
import { Link } from 'react-router-dom';
import {supabase} from "../../supabase/client";


function Login(){


    //Con Esto se Autentica el Correo del Usuario con un enlace
    const [email, setEmail] = useState("");  
    const [password, setPassword] = useState("");  
    const handleSignUp = async () => {
        try{
            const {user, session, error} = await supabase.auth.signUp({
                email,
                password,
            })
                if (error) throw error

                alert('Revisa tu correo para la confirmacion de registro')
        } catch(e) {
            alert(e.message)
        }
    };


    return(
        <div className="Background_Login">
            <header>Login</header>
            <form>
                <div className="ContainerLogin">
                    <div>
                        <label style={{fontWeight: '700', marginRight: 5}}>Correo:</label>
                        <input
                            type = "email"
                            name = "email"
                            placeholder = "ejemplo@site.com"
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label style={{fontWeight: '700', marginRight: 5}}>Contraseña:</label>
                        <input 
                            type = "password"
                            name = "password"
                            placeholder = "contraseña"
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                    </div>
                </div>                               
                <button
                    onClick={handleSignUp}
                >Send</button>
            </form>
        </div>
    );
}

export default Login;