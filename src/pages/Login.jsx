import React, {useState} from "react";
import TOSmodal from "../componentes/TOSModal";
import { supabase } from "../supabase/supabase";


function Login(){


    //Con Esto se Autentica el Correo del Usuario con un enlace
    const [modalOpen, setModalOpen] = useState(false);
    const [mail, setEmail] = useState("");  
    const [pass, setPassword] = useState("");  
    const handlog = async () => {
        try{
            const {user, session, error} = await supabase.auth.signUp({
                email: mail,
                password:pass,
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
            <form onSubmit={e => e.preventDefault()}>
                <div className="ContainerLogin">
                    <div>
                        <label style={{fontWeight: '700', marginRight: 5}}>Correo:</label>
                        <input
                            type = "email"
                            name = "email"
                            placeholder = "ejemplo@site.com"
                            value={mail}
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label style={{fontWeight: '700', marginRight: 5}}>Contraseña:</label>
                        <input 
                            type = "password"
                            name = "password"
                            placeholder = "contraseña"
                            value={pass}
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                    </div>
                </div>                               
                <button
                    onClickCapture={handlog}
                    onClick ={() => setModalOpen(true)}
                >Send</button>
                {modalOpen && <TOSmodal setOpenModal={setModalOpen}/>}
            </form>
        </div>
    );
}

export default Login;